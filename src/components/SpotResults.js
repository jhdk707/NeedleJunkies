import React, { useState } from "react";
import AlbumSaveButton from "./AlbumSaveButton";
import SearchFunction from "./SearchFunction";
import AlbumCard from "./AlbumCard";
// let result = null;

function SpotResults() {
  const [spotifyResults, setSpotifyResults] = useState(null);
  const saveAlbumData = () => {};
  return (
    <>
      <SearchFunction updateSpotifyResults={setSpotifyResults} />

      {spotifyResults &&
        spotifyResults.albums.items.map((item) => {
          return (
            <AlbumCard
              key={item.data.uri}
              artist={item.data.artists.items[0].profile.name}
              name={item.data.name}
              coverArtUrl={item.data.coverArt.sources[0].url}
              uri={item.data.uri}
              saveAlbumData={saveAlbumData}
            />
          );
        })}
      <p className="test"></p>
    </>
  );
}

// SpotResults.search = spotifyAlbumSearch;

export default SpotResults;

// const { name, artist, coverArtUrl } = albumData;
