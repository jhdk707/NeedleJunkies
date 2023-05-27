import React from "react";

const searchDiscogsAlbum = async (searchTerm) => {
  // Perform search logic using searchTerm
  const url = `https://api.discogs.com/database/search?release_title=${encodeURIComponent(
    searchTerm
  )}&type=release&format=album&per_page=10`;
  const headers = {
    "User-Agent": "Your App Name",
    Authorization: `Discogs token=${process.env.REACT_APP_DISCOGS_API_KEY}`,
  };

  try {
    const response = await fetch(url, { headers });

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

function DiscResults() {
  return (
    <>
      <h3>
        {" "}
        This Worked!!! Search function rendering under construction, coming
        soon!
      </h3>
    </>
  );
}

DiscResults.search = searchDiscogsAlbum;

export default DiscResults;
