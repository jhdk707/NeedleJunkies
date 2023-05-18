import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const VinylRecordCard = ({ record }) => {
  return (
    <Card>
      <Card.Img variant="top" src={record.image} />
      <Card.Body>
        <Card.Title>{record.title}</Card.Title>
        <Card.Text>{record.artist}</Card.Text>
        <Button variant="primary">Add to Collection</Button>
      </Card.Body>
    </Card>
  );
};

const VinylRecordsList = ({ records }) => {
  return (
    <Row>
      {records.map((record) => (
        <Col key={record.id} md={4} sm={6} xs={12}>
          <VinylRecordCard record={record} />
        </Col>
      ))}
    </Row>
  );
};

const Mycollection = () => {
  const records = [
    {
      id: 1,
      title: 'Abbey Road',
      artist: 'The Beatles',
      image: 'path/to/abbey_road.jpg',
    },
    {
      id: 2,
      title: 'Dark Side of the Moon',
      artist: 'Pink Floyd',
      image: 'path/to/dark_side_of_the_moon.jpg',
    },
    // Add more vinyl records here...
  ];

  return (
    <Container>
      <h1>My Vinyl Records Collection</h1>
      <VinylRecordsList records={records} />
    </Container>
  );
};

export default Mycollection;