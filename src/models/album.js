const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  artist: { type: String, required: true },
  album: { type: String, required: true },
  tracks: [
    {
      name: { type: String, required: true },
      length: { type: String, required: true },
    },
  ],
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
