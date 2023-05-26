// import React from "react";
// import AlbumSaveButton from "./AlbumSaveButton";

// const AlbumCard = (props) => {
//   const { name, artist, coverArtUrl, uri } = props;
//   const albumData = { name, artist, coverArtUrl, uri };
//   return (
//     <div className="album-card">
//       <img src={coverArtUrl} alt={name} />
//       <h3>{name}</h3>
//       <p>{artist}</p>
//       <AlbumSaveButton albumData={albumData} />
//     </div>
//   );
// };

// export default AlbumCard;

import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AlbumSaveButton from "./AlbumSaveButton";

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
});

const StyledCardContent = styled(CardContent)({
  textAlign: "center",
});

const AlbumCard = ({ name, artist, coverArtUrl, uri }) => {
  const albumData = { name, artist, coverArtUrl, uri };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="350"
        width="auto"
        image={coverArtUrl}
        alt={name}
      />
      <StyledCardContent>
        <Typography variant="subtitle1">{artist}</Typography>
        <Typography variant="subtitle2">{name}</Typography>
      </StyledCardContent>
      <AlbumSaveButton albumData={albumData} />
    </StyledCard>
  );
};

export default AlbumCard;

// import React from "react";
// import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { styled } from "@mui/system";
// import AlbumSaveButton from "./AlbumSaveButton";

// const StyledCard = styled(Card)({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: "8px",
// });

// const StyledCardContent = styled(CardContent)({
//   textAlign: "center",
// });

// const AlbumCard = (props) => {
//   const { name, artist, coverArtUrl, uri } = props;
//   const albumData = { name, artist, coverArtUrl, uri };
//   return (
//     <StyledCard>
//       <CardMedia component="img" height="350" image={coverArtUrl} alt={name} />
//       <StyledCardContent>
//         <Typography variant="subtitle1">{artist}</Typography>
//         <Typography variant="subtitle2">{name}</Typography>
//       </StyledCardContent>
//       <AlbumSaveButton uri={uri} saveAlbumData={saveAlbumData} />
//     </StyledCard>
//   );
// };

// export default AlbumCard;
