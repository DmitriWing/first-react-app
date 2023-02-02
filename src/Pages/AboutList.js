import React, { Component } from 'react';
import { Container, Tab, TabPane, Nav, Row, Col } from 'react-bootstrap';
import listData from '../Data/list.json';


export default function About(){
  const categories = ['Design', 'Team', 'Programming', 'Frameworks', 'Libraries'];
    return (
      <Container className='mt-3 shadow w-75 rounded'>
        <h2 className='h2 text-center p-3'>It's all about us <span className="h5 text-secondary"><em>from .json</em></span></h2>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey='0'>
          <Row>
            <Col sm={12}>
              <Nav fill variant='tabs' className='navbar navbar-light navbar-text bg-light rounded-2'>
                {categories.map((value, i)=>(
                  <Nav.Item>
                  <Nav.Link eventKey={i}>{value}</Nav.Link>
                </Nav.Item>
                ))}
              </Nav>
            </Col>

            <Tab.Content className=''>
              {listData.map((data,key) => (
              <Tab.Pane eventKey={key}>
                <div className='d-flex justify-content-around align-items-center'>
                  <img className='ronded w-25' src={data.image} alt={data.title}/>
                  <p className='text-start'>{data.description}</p>
                </div>
              </Tab.Pane>
              ))}
          </Tab.Content>
          </Row>
        </Tab.Container>
      </Container>
    );
}