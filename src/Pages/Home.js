import React, { Component } from 'react';
import { Container, Button, CardGroup, Card } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import CarouselBox from '../Components/CarouselBox';

export default class About extends Component{
  render() {
    return (
    //   <Container className='m-5 text-center shadow'>
    //   <h1>Welcome home</h1>
    // </Container>
    <div>
      <CarouselBox />
      <Container className='mt-5'>
      <h2 className='h2 text-center p-3'>Wellcome home!!!</h2>
      <CardGroup>
        <Card className='m-2'>
        <Card.Img
        variant='top'
        src='https://i.insider.com/5fd3ed3be00bce00188bafac?width=700' />
        <Card.Body>
          <Card.Title>Ipsum eiusmod.</Card.Title>
          <Card.Text>
            Pariatur exercitation ex pariatur aliquip id adipisicing pariatur id laborum veniam commodo consectetur nisi.
          </Card.Text>
          <Button variant="outline-info" className='mb-3'>Wellcome</Button>
        </Card.Body>
        </Card>

        <Card className='m-2'>
        <Card.Img
        variant='top'
        src='https://i.insider.com/5fd3ed3be00bce00188bafac?width=700' />
        <Card.Body>
          <Card.Title>Ipsum eiusmod.</Card.Title>
          <Card.Text>
            Pariatur exercitation ex pariatur aliquip id adipisicing pariatur id laborum veniam commodo consectetur nisi.
          </Card.Text>
          <Button variant="outline-info" className='mb-3'>Wellcome</Button>
        </Card.Body>
        </Card>

        <Card className='m-2'>
        <Card.Img
        variant='top'
        src='https://i.insider.com/5fd3ed3be00bce00188bafac?width=700' />
        <Card.Body>
          <Card.Title>Ipsum eiusmod.</Card.Title>
          <Card.Text>
            Pariatur exercitation ex pariatur aliquip id adipisicing pariatur id laborum veniam commodo consectetur nisi.
          </Card.Text>
          <Button variant="outline-info" className='mb-3'>Wellcome</Button>
        </Card.Body>
        </Card>

      </CardGroup>
      </Container>
    </div>
    );
  }
}