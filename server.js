const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const {signToken} = require('./server/utils/auth')
//const { ApolloServer } = require("apollo-server");
const { ApolloServer } = require("apollo-server-express");
// const { User } = require("./src/models/userSchema");
// Import your Mongoose models
const Album = require("./src/models/album");
// Import your GraphQL resolvers
const albumResolvers = require("./src/resolvers/albumResolvers");
// Import your type definitions (schemas)
const typeDefs = require("./src/resolvers/typeDefs");
const app = express();
const port = process.env.PORT || 3001;
const jwt = require('jsonwebtoken');
const AuthService = require ('./src/utils/Auth')
// const mongodburl =
//   process.env.MONGODB_URI ||
//   "mongodb+srv://jhdk707:" +
//     process.env.MONGODB_PASSWORD +
//     "@cluster0.zmm789m.mongodb.net/?retryWrites=true&w=majority";

// dotenv process for DB accsess
const mongodburl =
  process.env.MONGODB_URI ||
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.zmm789m.mongodb.net/?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose
  .connect(mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema, "users");

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers: [albumResolvers] });
  await server.start();
  const app = express();
  app.use(express.json());
  server.applyMiddleware({ app });
  // Signup endpoint
  app.post("/api/signup", async (req, res) => {
    // Signup logic here
    try {
      const { username, email, password } = req.body;
      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error signing up:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  });
  // Login endpoint
  app.post("/api/login", async (req, res) => {
    // Login logic here
    // console.log('eee')
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      // const token = AuthService.signToken(user)
      res.status(200).json({ message: "Login successful" }); 
      // token,user,
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app.listen({ port: 3001 }, () =>
    console.log(`Server ready at http://localhost:3001${server.graphqlPath}`)
  );
}

//
const { createAlbum } = require("./src/resolvers/createAlbum");

// Define a route to handle the saving of the album
app.post("/saveAlbum", async (req, res) => {
  try {
    const albumData = req.body; // Assuming the album data is sent in the request body
    const savedAlbum = await createAlbum(null, { input: albumData });

    // Return the saved album as the response
    res.json(savedAlbum);
  } catch (error) {
    console.error("Error saving album:", error);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Failed to save album" });
  }
});

// Call the function to start the Apollo server
startApolloServer();
