import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col, TabPane } from 'react-bootstrap';


export default class About extends Component{
  render() {
    return (
      <Container className='mt-3 text-center shadow'>
        <h2 className='h2 p-3'>It's all about us</h2>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column me-2'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                </Nav.Item>

              </Nav>
            </Col>

            <Col sm={9} >
              <Tab.Content className='mt-3 text-justify'>
                <TabPane eventKey='first'>
                  <p>Quis excepteur excepteur tempor Lorem commodo dolore. Mollit aute esse incididunt adipisicing adipisicing reprehenderit esse. Officia enim excepteur dolore incididunt consequat aliquip commodo. Sunt cupidatat adipisicing pariatur fugiat adipisicing voluptate sunt do.</p>
                </TabPane>
              </Tab.Content>
            </Col>

          </Row>
        </Tab.Container>
      </Container>
    );
  }
}