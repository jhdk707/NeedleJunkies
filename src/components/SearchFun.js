import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchFunction = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        const url = `https://spotify23.p.rapidapi.com/search/?q=${searchTerm}&type=albums`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2b148a14a3msh12fa6ec54fe1b3fp1ed456jsnbd039561a19d',
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

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch();
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-input-wrapper">
                <SearchIcon className="search-icon" />
                <input
                    type="text"
                    className="styled-input-base"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </div>
        </form>
    );
};

export default SearchFunction;