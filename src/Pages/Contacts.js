import React, { Component } from 'react';
import { Container, Form, Button} from 'react-bootstrap';

export default class Contacts extends Component{
  render() {
    return (
      <Container className='mt-3 shadow rounded'>
      <h1 className='h1 text-center'>Do not hesitate to contact us</h1>
      <Form>
       
        <Form.Group controlId="formBasicEmail" className='mb-3'>
          <Form.Label  className=''>Email</Form.Label>
          <Form.Control type='email' placeholder='Yours email address' />
         
          <Form.Text>
            Hey, bro or sister!!!
          </Form.Text>
        </Form.Group>
        


        <Form.Group controlId='formControlTextArea' className='mb-3'>
          <Form.Label className=''>How you doing?</Form.Label>
          <Form.Control as='textarea' rows='3' />
        </Form.Group>


        <Form.Group controlId='formBasicCheckBox'>
          <Form.Check type='checkbox' label='Check me!' className='mb-3' />
        </Form.Group>
        <Button variant="outline-info" className='mb-3' type='submit'>Send</Button>
      </Form>


    </Container>
    );
  }
}