import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Avatar, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import MyTech from "../MyTech";

const HomePage = () => {
  const user = { name: 'John Doe' }; // Simulated user data

  let formattedName = '';

  if (user && user.name) {
    formattedName = user.name.charAt(0).toUpperCase() + user.name.slice(1);
  }

  // Example array of albums
  const savedAlbums = [
    {
      artist: 'Artist 1',
      album: 'Album 1',
      image: 'https://example.com/album1.jpg',
    },
    {
      artist: 'Artist 2',
      album: 'Album 2',
      image: 'https://example.com/album2.jpg',
    },
    // ... other albums ...
  ];

  const minColumns = Math.min(8, savedAlbums.length); // Minimum number of columns required

  const CenteredContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    flexDirection: 'column',
    height: '', // Adjust the height as needed
  }));

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div style={{ flex: '1', padding: '20px', overflow: 'auto' }}>
        <CenteredContainer>
          <Typography variant="h4" component="div">
            Welcome, {formattedName}!
          </Typography>
          <Avatar
            sx={{ width: 100, height: 100, mt: 2 }}
            alt={user.name}
            src={user.photoUrl}
          />
        </CenteredContainer>
        <Box
          mt={4} // Increase the top margin to create more spacing
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center" // Center the items horizontally
          minHeight="40vh" // Adjust the height as needed
        >
          <Typography variant="h6">
            Since you liked {savedAlbums[0].album}, you may also like...
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
              gridGap: '16px',
              width: '80%',
              maxHeight: '100%',
              overflow: 'auto',
              marginTop: '16px',
            }}
          >
            {savedAlbums.slice(0, minColumns).map((album, index) => (
              <Card key={index} sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={album.image}
                  alt={album.album}
                />
                <CardContent>
                  <Typography variant="subtitle1">{album.artist}</Typography>
                  <Typography variant="subtitle2">{album.album}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </div>
      <div
        style={{
          width: '300px',
          borderLeft: '3px solid #ffb20f',
          padding: '20px',
          overflow: 'auto',
        }}
      >
        <Box mb={4}>
          <Typography variant="h6">Your Fave Five:</Typography>
          <ol style={{ listStyle: 'decimal', paddingLeft: '20px' }}>
            {savedAlbums.slice(0, 5).map((album, index) => (
              <li key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100"
                    image={album.image || ''}
                    alt={album.album || ''}
                  />
                  <CardContent>
                    <Typography variant="subtitle1">{album.artist}</Typography>
                    <Typography variant="subtitle2">{album.album}</Typography>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </Box>
        <MyTech />
        {/* <Box>
          <Typography variant="h6">My Tech:</Typography>
          <Box mt={2}>
            <Typography>Turntable:</Typography>
            <TextField label="Turntable Input" />
          </Box>
          <Box mt={2}>
            <Typography>Amp:</Typography>
            <TextField label="Amp Input" />
          </Box>
          <Box mt={2}>
            <Typography>Speakers:</Typography>
            <TextField label="Speakers Input" />
          </Box>
          <Box mt={2}>
            <Typography>Other Gear:</Typography>
            <TextField label="Other Gear Input" />
          </Box>
          <Box mt={2}>
            <Button variant="contained" color="primary">
              Update
            </Button>
          </Box>
        </Box> */}
      </div>
    </div>
  );
};

export default HomePage;