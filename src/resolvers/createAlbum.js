const Album = require("../models/album"); // Import Album model

const createAlbum = async (parent, args) => {
  try {
    const albumData = args.input; // Album data is passed as input to the resolver
    const album = new Album({
      uri: albumData.uri,
      name: albumData.name,
      artist: albumData.artists.items[0].profile.name,
      coverArtUrl: albumData.coverArt.sources[0].url,
      releaseYear: albumData.date.year,
    });

    // Save the album to the database
    await album.save();
    console.log("Album saved to the database");

    // Return the created album to the client or perform any other necessary operations
    return album;
  } catch (error) {
    console.error("Error saving album to the database:", error);
    // Handle the error and return an appropriate response to the client
    throw new Error("Failed to create album");
  }
};

// Export your resolver functions
module.exports = {
  createAlbum,
};
