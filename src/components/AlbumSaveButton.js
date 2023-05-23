import React from "react";

const AlbumSaveButton = ({ albumData }) => {
  const handleSaveButtonClick = () => {
    // Send a request to the server to save the album
    fetch("/saveAlbum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(albumData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Album saved:", data);
        // Handle the response from the server
      })
      .catch((error) => {
        console.error("Error saving album:", error);
        // Handle the error
      });
  };

  return (
    <div>
      {/* Render button */}
      <button onClick={handleSaveButtonClick}>Save Album</button>
    </div>
  );
};

export default AlbumSaveButton;
