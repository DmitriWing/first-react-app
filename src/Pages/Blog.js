import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Categories from './Categories';
import BlogPost from './BlogPost';

export default function Blog() {
    return (
      <Container className='me-auto shadow pb-5 rounded'>
      <h1 className='h1 text-center'>This is our blog</h1>

          <Categories catId={activeIndex} onClickCategory={(id) => setActiveIndex(id)} />

          <BlogPost categoryId={activeIndex} />


    </Container>
    );
}