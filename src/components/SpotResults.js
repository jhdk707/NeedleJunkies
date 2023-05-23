import React from "react";

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

        if (response.ok) {
            const result = await response.json();
            console.log(result);

        } else {
            console.error('Error occurred while searching');
        }
    } catch (error) {
        console.error('Error occurred while searching', error);
    }

};

function SpotResults() {
    return (
        <>does this appear?</>
    )
}

SpotResults.search = spotifyAlbumSearch;

export default SpotResults;
