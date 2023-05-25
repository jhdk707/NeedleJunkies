// import React, { useState } from "react";
// import AlbumSaveButton from "./AlbumSaveButton";
// import SearchFunction from "./SearchFunction";
// import AlbumCard from "./AlbumCard";

// function SpotResults() {
//   const [spotifyResults, setSpotifyResults] = useState(null);
//   const saveAlbumData = () => {};
//   return (
//     <>
//       <SearchFunction updateSpotifyResults={setSpotifyResults} />

//       {spotifyResults &&
//         spotifyResults.albums.items.map((item) => {
//           return (
//             <AlbumCard
//               key={item.data.uri}
//               artist={item.data.artists.items[0].profile.name}
//               name={item.data.name}
//               coverArtUrl={item.data.coverArt.sources[0].url}
//               uri={item.data.uri}
//               saveAlbumData={saveAlbumData}
//             />
//           );
//         })}
//       <p className="test"></p>
//     </>
//   );
// }

// export default SpotResults;

// const { name, artist, coverArtUrl } = albumData;

import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import AlbumSaveButton from "./AlbumSaveButton";
import SearchFunction from "./SearchFunction";
import AlbumCard from "./AlbumCard";

function SpotResults() {
  const [spotifyResults, setSpotifyResults] = useState(null);
  const saveAlbumData = () => {};

  return (
    <>
      <SearchFunction updateSpotifyResults={setSpotifyResults} />

      {spotifyResults && (
        <Box border={1} p={2} mt={2}>
          <Grid container spacing={2}>
            {spotifyResults.albums.items.map((item) => (
              <Grid item key={item.data.uri} xs={12} sm={6} md={4} lg={3}>
                <AlbumCard
                  artist={item.data.artists.items[0].profile.name}
                  name={item.data.name}
                  coverArtUrl={item.data.coverArt.sources[0].url}
                  uri={item.data.uri}
                  saveAlbumData={saveAlbumData}
                />
              </Grid>
            ))}
          </Grid>
          {spotifyResults.albums.items.length === 0 && (
            <Typography variant="body2" align="center">
              No albums found.
            </Typography>
          )}
        </Box>
      )}

      <p className="test"></p>
    </>
  );
}

export default SpotResults;
