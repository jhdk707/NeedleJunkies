import React, { useState, useEffect } from "react";
import { TextField, Button, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
const Album = require("../models/album.js"); // import album model for database accsess

function SearchFunction() {
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (selectedOption === "Search For Album" && searchTerm !== "") {
      // Perform search for album
      console.log("Performing search for album...");
      searchSpotAlbum();
    } else if (selectedOption === "Search For Sale" && searchTerm !== "") {
      // Perform search for sale
      console.log("Performing search for sale...");
      searchDiscogsAlbum();
    }
  }, [selectedOption, searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleMenuClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search Term:", searchTerm);
    localStorage.setItem("Search Term:", searchTerm);
    if (selectedOption === "Search For Album") {
      // Perform search for album
      console.log("Performing search for album...");
      searchSpotAlbum();
    } else if (selectedOption === "Search For Sale") {
      // Perform search for sale
      console.log("Performing search for sale...");
      searchDiscogsAlbum();
    }
  };
  ////////////// CODE TO REPLACE WHEN NEW SEARCH FUNTION W/ RENDER WORKS //////////////////////
  // const searchSpotAlbum = async () => {
  //     // Perform search logic using searchTerm
  //     const url = `https://spotify23.p.rapidapi.com/search/?q=${searchTerm}&type=albums`;

  //     const options = {
  //         method: 'GET',
  //         headers: {
  //             'X-RapidAPI-Key': process.env.REACT_APP_SPOTIFY_API_KEY,
  //             'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
  //         },
  //     };

  //     try {
  //         const response = await fetch(url, options);

  //         if (response.ok) {
  //             const result = await response.json();
  //             console.log(result);
  //         } else {
  //             console.error('Error occurred while searching');
  //         }
  //     } catch (error) {
  //         console.error('Error occurred while searching', error);
  //     }

  // };

  ///////////////////////// JESSE SEARCH FUNCTION CODE WITH DATABASE STORE ///////////////////////
  const searchSpotAlbum = async () => {
    try {
      // Perform search logic using searchTerm
      const url = `https://spotify23.p.rapidapi.com/search/?q=${searchTerm}&type=albums`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_SPOTIFY_API_KEY,
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        console.log(result);

        // Extract the necessary information from the search results
        const { artist, album, tracks, releaseDate, genre } = result;

        // Create a new Album document
        const newAlbum = new Album({
          artist,
          album,
          tracks,
          releaseDate,
          genre,
        });

        // Save the new album to MongoDB
        await newAlbum.save();
        console.log("Album saved to MongoDB:", newAlbum);
      } else {
        console.error("Error occurred while searching");
      }
    } catch (error) {
      console.error("Error occurred while searching", error);
    }
  };

  const searchDiscogsAlbum = async () => {
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

  const handleSearch = (selectedOption) => {
    switch (selectedOption) {
      case "Search For Album":
        // Perform search for album
        console.log("Performing search for album...");
        searchSpotAlbum(localStorage.getItem("Search Term:"));
        break;
      case "Search For Sale":
        // Perform search for sale
        console.log("Performing search for sale...");
        searchDiscogsAlbum(localStorage.getItem("Search Term:"));
        break;
      case "Get All Users":
        // Get all users
        console.log("Getting all users...");
        break;
      case "Get Single User":
        // Get single user
        console.log("Getting single user...");
        break;
      default:
        console.log("Invalid search option");
        break;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <TextField
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        variant="outlined"
        size="small"
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: (
            <Button
              variant="text"
              size="small"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </Button>
          ),
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleOptionSelect("Search For Album")}>
          Search For Album
        </MenuItem>
        <MenuItem onClick={() => handleOptionSelect("Search For Sale")}>
          Search For Sale
        </MenuItem>
        <MenuItem onClick={() => handleOptionSelect("Get All Users")}>
          Get All Users
        </MenuItem>
        <MenuItem onClick={() => handleOptionSelect("Get Single User")}>
          Get Single User
        </MenuItem>
      </Menu>
    </form>
  );
}

export default SearchFunction;