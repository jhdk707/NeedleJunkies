import React from "react";
import AlbumSaveButton from "./AlbumSaveButton";

const AlbumCard = ({ albumData }) => {
  const { name, artist, coverArtUrl } = albumData;

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
