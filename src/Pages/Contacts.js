import React, { Component } from 'react';
import { Container, Form, Button} from 'react-bootstrap';

export default class Contacts extends Component{
  render() {
    return (
      <Container className='m-5 text-center shadow'>
      <h1>Do not hesitate to contact us</h1>
      <Form>
       
        <Form.Group controlId="formBasicEmail">
          <Form.Label  className='d-flex'>Email</Form.Label>
          
          <Form.Control type='email' placeholder='Yours email address' />
         
          <Form.Text>
            Hey, bro or sister!!!
          </Form.Text>
        </Form.Group>
        


        <Form.Group controlId='formControlTextArea'>
          <Form.Label className='d-flex'>How you doing?</Form.Label>
          <Form.Control as='textarea' rows='3' />
        </Form.Group>
        <Form.Group controlId='formBasicCheckBox'>
          <Form.Check type='checkbox' label='Check me!' className='d-flex d-start p-3' />
        </Form.Group>
        <Button variant="outline-info" className='mb-3' type='submit'>Share</Button>
      </Form>


    </Container>
    );
  }
}