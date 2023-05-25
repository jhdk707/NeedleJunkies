import React from 'react';
import { Grid, Typography, Avatar, Paper, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  friendBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 300, // Adjust the height as needed
    width: 300, // Adjust the width as needed
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
  favoriteAlbum: {
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(2),
  },
}));


const friends = [
  { id: 1, name: 'Tom Myspace', avatar: 'T', favoriteAlbum: 'album1.jpg' },
  { id: 2, name: 'Jane Smith', avatar: 'J', favoriteAlbum: 'album2.jpg' },
  { id: 3, name: 'Alex Johnson', avatar: 'A', favoriteAlbum: 'album3.jpg' },
  { id: 4, name: 'Ricky Peepee', avatar: 'R', favoriteAlbum: 'album3.jpg' },
  { id: 5, name: 'Bob Nougat', avatar: 'B', favoriteAlbum: 'album3.jpg' },
  { id: 6, name: 'Smack Watson', avatar: 'S', favoriteAlbum: 'album3.jpg' },
  { id: 7, name: 'Jeremy McCarter', avatar: 'J', favoriteAlbum: 'album3.jpg' },
  { id: 8, name: 'Tyler Dinslage', avatar: 'T', favoriteAlbum: 'album3.jpg' },
  { id: 9, name: 'Jesse Hudak', avatar: 'J', favoriteAlbum: 'album3.jpg' },
  { id: 10, name: 'Alex Johnson', avatar: 'A', favoriteAlbum: 'album3.jpg' },
  // Add more friends as needed
];

const Friends = () => {
  const classes = useStyles();
  const totalFriends = friends.length;

  return (
    <div>
      <Typography variant="h4" component="h1" align="center">
        My Friends ({totalFriends})
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {friends.map((friend) => (
          <Grid item key={friend.id} xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3} className={classes.friendBox}>
              <Avatar className={classes.avatar}>{friend.avatar}</Avatar>
              <Typography>{friend.name}</Typography>
              <Typography variant="subtitle2">Current Favorite:</Typography>
              <img
                src={friend.favoriteAlbum}
                alt="Favorite Album"
                className={classes.favoriteAlbum}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};


export default Friends;




