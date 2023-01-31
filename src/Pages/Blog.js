import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class About extends Component{
  render() {
    return (
      <Container className='m-5 text-center shadow'>
      <h1>This is our blog</h1>
    </Container>
    );
  }
}