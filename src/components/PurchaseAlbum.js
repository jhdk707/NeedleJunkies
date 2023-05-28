import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

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

const PurchaseAlbum = ({ title, artist, coverArtUrl, masterID }) => {
    const albumData = { title, artist, coverArtUrl, masterID };

    return (
        <StyledCard>
            <CardMedia
                component="img"
                height="350"
                width="auto"
                image={coverArtUrl}
                alt={title}
            />
            <StyledCardContent>
                <Typography variant="subtitle2">{title}</Typography>
            </StyledCardContent>
            <div>
                {/* Render button */}
                <button
                    style={{
                        width: "350px",
                        backgroundColor: "var(--select-color)",
                        color: "#fff9fb",
                        borderRadius: "0 0 10px 10px",
                        padding: "8px",
                        border: "none",
                        outline: "none",
                    }}
                >
                    <a
                        href={`https://www.discogs.com/master/${masterID}`} // Replace with the desired URL
                        target="_blank" // Open the link in a new tab
                        rel="noopener noreferrer" // Recommended for security and performance
                        style={{
                            color: "#fff9fb",
                            textDecoration: "none",
                        }}
                    >
                        Buy This Album!
                    </a>
                </button>

            </div>
        </StyledCard>

    );
};

export default PurchaseAlbum;