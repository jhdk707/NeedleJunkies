const Album = require("../models/album");

// Create a new album
const newAlbum = new Album({
  artist: "Artist Name",
  album: "Album Name",
  tracks: [
    { name: "Track 1", length: "3:45" },
    { name: "Track 2", length: "4:20" },
    // Add more tracks as needed
  ],
  releaseDate: new Date("2023-05-17"),
  genre: "Pop",
});

// Save the album to the database
newAlbum
  .save()
  .then((savedAlbum) => {
    console.log("Album saved successfully:", savedAlbum);
  })
  .catch((error) => {
    console.error("Error saving album:", error);
  });
