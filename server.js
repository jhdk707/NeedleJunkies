const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
//const { ApolloServer } = require("apollo-server");
const { ApolloServer } = require("apollo-server-express");

// Import your Mongoose models
const Album = require("./src/models/album");
const { userSchema, User } = require("./src/models/userSchema");

// Import your GraphQL resolvers
const albumResolvers = require("./src/resolvers/albumResolvers");

// Import your type definitions (schemas)
const typeDefs = require("./src/resolvers/typeDefs");

const app = express();
const port = process.env.PORT || 3001;

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

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers: albumResolvers });
  await server.start();
  const app = express();
  server.applyMiddleware({ app });
  // app.use(express.json());
  app.use(bodyParser.json({ extended: true }));
  app.use(cors()); // Enable CORS for all routes

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
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app.listen({ port: 3001 }, () =>
    console.log(`Server ready at http://localhost:3001${server.graphqlPath}`)
  );

  // Define a route to handle the saving of the album
  app.post("/saveAlbum", async (req, res) => {
    try {
      const albumData = req.body; // Assuming the album data is sent in the request body
      const savedAlbum = await albumResolvers.Mutation.createAlbum(null, {
        input: albumData,
      });

      // Return the saved album as the response
      res.json(savedAlbum);
    } catch (error) {
      console.error("Error saving album:", error);
      // Handle the error and send an appropriate response
      res.status(500).json({ error: "Failed to save album" });
    }
  });
}

// // Call the function to start the Apollo server
startApolloServer();

// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// require("dotenv").config();
// // Import your Mongoose models
// const Album = require("./src/models/album");
// const { userSchema, User } = require("./src/models/userSchema");

// // Import your GraphQL resolvers
// const albumResolvers = require("./src/resolvers/albumResolvers");

// // Import your type definitions (schemas)
// const typeDefs = require("./src/resolvers/typeDefs");

// const app = express();
// const port = process.env.PORT || 3001;

// const mongodburl =
//   process.env.MONGODB_URI ||
//   `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.zmm789m.mongodb.net/?retryWrites=true&w=majority`;

// mongoose
//   .connect(mongodburl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// // app.use(express.json());
// app.use(cors());
// // app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

// app.post("/api/signup", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     // Check if user already exists
//     const existingUser = await User.findOne({
//       $or: [{ email }, { username }],
//     });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     // Create a new user
//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error("Error signing up:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// app.post("/api/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({ message: "Login successful" });
//   } catch (error) {
//     console.error("Error logging in:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// app.post("/saveAlbum", async (req, res) => {
//   try {
//     const albumData = req.body; // Assuming the album data is sent in the request body
//     const savedAlbum = await albumResolvers.Mutation.createAlbum(null, {
//       input: albumData,
//     });

//     res.json(savedAlbum);
//   } catch (error) {
//     console.error("Error saving album:", error);
//     res.status(500).json({ error: "Failed to save album" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server ready at http://localhost:${port}`);
// });
