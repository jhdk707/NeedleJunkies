// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// const VinylRecordCard = ({ record }) => {
//   return (
//     <Card>
//       <Card.Img variant="top" src={record.image} />
//       <Card.Body>
//         <Card.Title>{record.title}</Card.Title>
//         <Card.Text>{record.artist}</Card.Text>
//         <Button variant="primary">Add to Collection</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// const VinylRecordsList = ({ records }) => {
//   return (
//     <Row>
//       {records.map((record) => (
//         <Col key={record.id} md={4} sm={6} xs={12}>
//           <VinylRecordCard record={record} />
//         </Col>
//       ))}
//     </Row>
//   );
// };

// const Mycollection = () => {
//   const records = [
//     {
//       id: 1,
//       title: 'Abbey Road',
//       artist: 'The Beatles',
//       image: 'path/to/abbey_road.jpg',
//     },
//     {
//       id: 2,
//       title: 'Dark Side of the Moon',
//       artist: 'Pink Floyd',
//       image: 'path/to/dark_side_of_the_moon.jpg',
//     },
//     // Add more vinyl records here...
//   ];

//   return (
//     <Container>
//       <h1>My Vinyl Records Collection</h1>
//       <VinylRecordsList records={records} />
//     </Container>
//   );
// };

import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';



const RecordGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const RecordCard = styled(Card)(({ theme, columnCount }) => ({
  maxWidth: `calc(100% / ${columnCount} - ${theme.spacing(2)}px)`,
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(2),
}));

const RecordImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
}));

export default function Mycollection({spotifyResults}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const columnCount = matches ? 4 : 2;

  return (
    <RecordGrid container spacing={2} justifyContent="center">
      {spotifyResults.map((record) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={record.id}>
          <RecordCard
            component={Link}
            to={`/record/${record.id}`}
            columnCount={columnCount}
            sx={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <RecordImage image={record.image} alt={record.title} />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {record.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {record.artist}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Year: {record.year}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Genre: {record.genre}
                </Typography>
              </CardContent>
            </CardActionArea>
          </RecordCard>
        </Grid>
      ))}
    </RecordGrid>
  );
}