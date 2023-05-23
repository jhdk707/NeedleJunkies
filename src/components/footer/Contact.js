import React from 'react';
import { Typography, Container, Grid, Paper, Avatar } from '@mui/material';

const developers = [
  {
    name: 'Jesse Hudak',
    photoUrl: 'https://example.com/developer1.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Tyler Dinslage',
    photoUrl: 'https://example.com/developer2.jpg',
    bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Jeremy McCarter',
    photoUrl: 'https://example.com/developer2.jpg',
    bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
  // Add more developers here
];

const Contact = () => {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        About the Developers
      </Typography>
      <Grid container spacing={4}>
        {developers.map((developer, index) => (
          <Grid item xs={12} key={index}>
            <Paper sx={{ p: 3, width: '100%' }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <Avatar
                    sx={{ width: 100, height: 100 }}
                    alt={developer.name}
                    src={developer.photoUrl}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {developer.name}
                  </Typography>
                  <Typography variant="body1">{developer.bio}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;