import React from "react";
const userSearch = localStorage.getItem("Search Term");
const spotifyAlbumSearch = async () => {
  // Perform search logic using searchTerm
  const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
    userSearch
  )}&type=albums`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_SPOTIFY_API_KEY,
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      console.error("Error occurred while searching");
    }
  } catch (error) {
    console.error("Error occurred while searching", error);
  }
};
function SpotResults() {
  spotifyAlbumSearch();
  return <>does this appear?</>;
}
export default SpotResults;
