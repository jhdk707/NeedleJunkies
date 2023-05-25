import React from "react";
import AlbumSaveButton from "./AlbumSaveButton"
// let result;

const spotifyAlbumSearch = async (searchTerm) => {

    // Perform search logic using searchTerm
    const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
        searchTerm
    )}&type=albums`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_SPOTIFY_API_KEY,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (response.ok) {
            console.log(result);
            document.querySelector("#artist").textContent = result.albums.items[0].data.artists.items[0].profile.name
        } else {
            console.error('Error occurred while searching');
        }
    } catch (error) {
        console.error('Error occurred while searching', error);
    }

};
function SpotResults() {
    return (
        <>
            <div className="album-card">
                {/* <img src={coverArtUrl} alt={name} /> */}
                <h3 id="query"></h3>
                <p id="artist"></p>
                <AlbumSaveButton />
            </div>
        </>
    )
}

SpotResults.search = spotifyAlbumSearch;

export default SpotResults;
