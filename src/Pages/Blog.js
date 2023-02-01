import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Blog extends Component{
  render() {
    return (
      <Container className='m-5 text-center shadow'>
      <h1>This is our blog</h1>
      <Row className='bg-danger d-flex justify-content-around align-items-center'>
        <Col md='9'>
          <Row className='m-2'>
            <Col md='3'>
              <img
              width={150}
              height={150}
              className='mr-3'
              src='https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93458bbe24b9f88451ea08197888ab8e'
              alt='logo' />
            </Col>
            <Col md='9'>
              <h4 className='h4 text-start'>In this article You'll meet with something incredible</h4>
              <p className='text-start'>
                Deserunt do commodo do id aliqua veniam do quis duis sunt nulla sint est. Culpa labore anim ex et minim amet enim et deserunt sunt. Do quis adipisicing aliqua aute. Ut nostrud nostrud sunt elit amet ullamco.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
    );
  }
}