import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Blog extends Component{
  render() {
    return (
      <Container className='me-auto shadow pb-5 rounded'>
      <h1 className='h1 text-center'>This is our blog</h1>

      <Row className='mb-5 shadow d-flex justify-content-between'>
        <Col md='2'>
          <img
          width={150}
          height={150}
          className='me-auto'
          src='https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93458bbe24b9f88451ea08197888ab8e'
          alt='logo' />
        </Col>
        <Col md='10 p-3'>
          <h4 className='h4 text-start'>In this article You'll meet with something incredible</h4>
          <p className=''>
            Deserunt do commodo do id aliqua veniam do quis duis sunt nulla sint est. Culpa labore anim ex et minim amet enim et deserunt sunt. Do quis adipisicing aliqua aute. Ut nostrud nostrud sunt elit amet ullamco.
          </p>
            </Col>
      </Row>

      <Row className='mb-5 shadow d-flex justify-content-between'>
        <Col md='2'>
          <img
          width={150}
          height={150}
          className='me-auto'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuITip3uqwcROZSBFQixaH9xpdLxcNGLJ2jw&usqp=CAU'
          alt='logo' />
        </Col>
        <Col md='10 p-3'>
          <h4 className='h4 text-start'>Culpa eu in tempor esse.</h4>
          <p className=''>
            Eu dolor ea Lorem nisi duis eu. Voluptate amet fugiat occaecat laborum amet dolor nulla incididunt nostrud. Ea incididunt deserunt cillum eu duis cillum laborum aute. Aliqua nulla nostrud et veniam quis adipisicing dolor tempor dolore exercitation aliquip minim do reprehenderit. Qui ad quis cupidatat tempor.
          </p>
            </Col>
      </Row>

      <Row className='mb-5 shadow d-flex justify-content-between'>
        <Col md='2'>
          <img
          width={150}
          height={150}
          className='me-auto'
          src='https://wl-brightside.cf.tsp.li/resize/728x/jpg/014/188/2bad9158d89af7615015de25c4.jpg'
          alt='logo' />
        </Col>
        <Col md='10 p-3'>
          <h4 className='h4 text-start'>Ea est est voluptate dolore nisi.</h4>
          <p className=''>
            Nisi reprehenderit cillum cupidatat deserunt elit proident velit anim nisi cillum. Aute excepteur deserunt pariatur enim minim mollit dolor fugiat. Veniam nulla non nulla ut duis dolor eu sunt. In eu proident nostrud ex non. Aliqua quis sint irure do pariatur consectetur reprehenderit aute cillum. Proident sit eiusmod enim aliquip pariatur.
          </p>
            </Col>
      </Row>

      <Row className='mb-5 shadow d-flex justify-content-between'>
        <Col md='2'>
          <img
          width={150}
          height={150}
          className='me-auto'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKwbs5s5pgs9F4GVeyzlqzlHSrWxrtPMo6w&usqp=CAU'
          alt='logo' />
        </Col>
        <Col md='10 p-3'>
          <h4 className='h4 text-start'>Est in aute quis labore culpa culpa mollit tempor.</h4>
          <p className=''>
            Est eiusmod dolore est et exercitation nulla amet nisi tempor tempor et eiusmod. Nisi eiusmod est laborum magna officia nostrud minim labore ullamco proident labore pariatur sint. Ex esse occaecat veniam officia aliqua proident sint et in. Ea voluptate elit dolore magna duis irure anim.
          </p>
            </Col>
      </Row><Row className='mb-5 shadow d-flex justify-content-between'>
        <Col md='2'>
          <img
          width={150}
          height={150}
          className='me-auto'
          src='https://www.blog.motifphotos.com/wp-content/uploads/2020/02/video-1200x800.jpg'
          alt='logo' />
        </Col>
        <Col md='10 p-3'>
          <h4 className='h4 text-start'>Aute dolor tempor consectetur magna pariatur consectetur in tempor nostrud do excepteur aute non.</h4>
          <p className=''>
            Id aliquip esse esse velit nisi qui cillum dolore exercitation incididunt. Officia ut qui reprehenderit ipsum nostrud in in. Sit nisi adipisicing minim tempor cillum ea. In dolor voluptate voluptate proident. Nostrud reprehenderit dolore minim irure laborum consequat eu commodo qui ut. Duis enim nulla aute irure commodo ipsum. Nostrud dolore dolor excepteur deserunt labore ex laborum occaecat consectetur aliqua minim.
          </p>
            </Col>
      </Row>

      <Row className='mb-5 shadow d-flex justify-content-between'>
        <Col md='2'>
          <img
          width={150}
          height={150}
          className='me-auto'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEr1AiVE3QtBxw5y7e8r6UKkbqfdzT0MJUA&usqp=CAU'
          alt='logo' />
        </Col>
        <Col md='10 p-3'>
          <h4 className='h4 text-start'>Excepteur duis non est reprehenderit aliquip laboris pariatur aliquip.</h4>
          <p className=''>
           Voluptate eiusmod exercitation adipisicing commodo. Et anim irure cupidatat laborum elit commodo sint irure aute ad laboris consectetur do in. Voluptate deserunt eiusmod nisi consectetur consequat adipisicing exercitation. Enim enim nostrud elit qui exercitation eiusmod deserunt officia ad. Cillum est ea duis aliquip consequat elit voluptate id duis reprehenderit et reprehenderit aliquip reprehenderit.
          </p>
            </Col>
      </Row>

    </Container>
    );
  }
}