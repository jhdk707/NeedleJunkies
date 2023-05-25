import React from "react";
import AlbumSaveButton from "./AlbumSaveButton";

const AlbumCard = (props) => {
  const { name, artist, coverArtUrl, uri } = props;
  const albumData = { name, artist, coverArtUrl, uri };
  return (
    <div className="album-card">
      <img src={coverArtUrl} alt={name} />
      <h3>{name}</h3>
      <p>{artist}</p>
      <AlbumSaveButton albumData={albumData} />
    </div>
  );
};

export default AlbumCard;
