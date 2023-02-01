import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col, TabPane } from 'react-bootstrap';


export default class About extends Component{
  render() {
    return (
      <Container className='mt-3 shadow-sm'>
        <h2 className='h2 text-center p-3'>It's all ABOUT us</h2>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={12}>
              <Nav fill variant='tabs' className='navbar navbar-light navbar-text bg-light'>
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

            <Col sm={12} >
              <Tab.Content className=''>
                <TabPane eventKey='first' className='d-flex justify-content-around align-items-center'>
                  <img className='ronded w-25' src='https://t3.ftcdn.net/jpg/04/67/34/84/360_F_467348445_0rJB6USO6PtoVdI6LHCLxWm9S6kro1vO.jpg' alt='design'/>
                  <p className='text-start'>Quis excepteur excepteur tempor Lorem commodo dolore. Mollit aute esse incididunt adipisicing adipisicing reprehenderit esse. Officia enim excepteur dolore incididunt consequat aliquip commodo. Sunt cupidatat adipisicing pariatur fugiat adipisicing voluptate sunt do.</p>
                </TabPane>
                <TabPane eventKey='second' className='d-flex justify-content-around align-items-center'>
                  <img className='ronded float-start w-25 p-0' src='https://www.shutterstock.com/image-vector/social-network-team-partners-friends-260nw-1028804608.jpg' alt='team'/>
                  <p>Elit aliqua amet aliqua sit. Consequat tempor veniam velit minim eu officia officia non non. Laborum sunt consectetur eiusmod ipsum nisi velit amet ullamco quis exercitation magna laborum ea elit. Occaecat ex culpa dolor irure commodo nisi commodo culpa magna commodo id deserunt nulla. Elit ea mollit ipsum culpa anim ad eiusmod tempor consectetur est. Labore aliquip laborum consectetur Lorem reprehenderit ullamco esse ea ea excepteur sit excepteur deserunt tempor. Ea nulla occaecat consectetur officia.</p>
                </TabPane>
                <TabPane eventKey='third' className='d-flex justify-content-around align-items-center'>
                  <img className='ronded float-start w-25' src='https://static.vecteezy.com/system/resources/previews/004/908/013/original/coding-logo-design-template-free-vector.jpg' alt='programming'/>
                  <p>Elit aliqua amet aliqua sit. Consequat tempor veniam velit minim eu officia officia non non. Laborum sunt consectetur eiusmod ipsum nisi velit amet ullamco quis exercitation magna laborum ea elit. Occaecat ex culpa dolor irure commodo nisi commodo culpa magna commodo id deserunt nulla. Elit ea mollit ipsum culpa anim ad eiusmod tempor consectetur est. Labore aliquip laborum consectetur Lorem reprehenderit ullamco esse ea ea excepteur sit excepteur deserunt tempor. Ea nulla occaecat consectetur officia.</p>
                </TabPane>
                <TabPane eventKey='fourth' className='d-flex justify-content-around align-items-center'>
                  <img className='ronded float-start w-25' src='https://thumbs.dreamstime.com/b/frameworks-isolated-icon-simple-element-illustration-technology-concept-icons-editable-logo-sign-symbol-design-white-142287533.jpg' alt='frameworks'/>
                  <p>Qui eu aliquip proident adipisicing nisi excepteur magna sunt cillum reprehenderit eiusmod et. Est amet reprehenderit exercitation minim voluptate. Est voluptate laboris excepteur nulla dolor incididunt ullamco ullamco. Labore aliquip laborum consectetur Lorem reprehenderit ullamco esse ea ea excepteur sit excepteur deserunt tempor. Ea nulla occaecat consectetur officia. Esse aliqua culpa veniam dolor esse occaecat proident labore qui sint ex.</p>
                </TabPane>
                <TabPane eventKey='fifth' className='d-flex justify-content-around align-items-center'>
                  <img className='ronded float-start w-25' src='https://thumbs.dreamstime.com/b/book-icon-vector-design-library-symbol-web-graphic-jpg-ai-app-logo-object-flat-image-sign-eps-art-picture-stock-79808709.jpg' alt='libraries'/>
                  <p>Officia eu eiusmod aliquip velit fugiat velit ex non anim officia. Commodo irure duis id id esse ex irure pariatur eu. Elit sit consectetur mollit incididunt pariatur dolor id excepteur dolor eiusmod nulla fugiat. Occaecat ex culpa dolor irure commodo nisi commodo culpa magna commodo id deserunt nulla. Elit ea mollit ipsum culpa anim ad eiusmod tempor consectetur est. In sint duis amet consectetur anim fugiat est non non.</p>
                </TabPane>
              </Tab.Content>
            </Col>

          </Row>
        </Tab.Container>
      </Container>
    );
  }
}