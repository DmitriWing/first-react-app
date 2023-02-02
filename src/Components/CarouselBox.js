import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import tenerife  from '../assets/Spain-Tenerife.jpg';
import teide  from '../assets/teide.jpg';
import blackSand  from '../assets/black-sand.jpg';

export default class CarouselBox extends Component{
  render(){
    return(
      <Carousel fade>
        
        <Carousel.Item style={{height: '88vh',}}>
          <img
            className='d-block'
            src={tenerife}
            alt='tenerife'
          />
          <Carousel.Caption className='bg-info rounded'>
            <h3 className='h3'>Tenerife Island</h3>
            <p>The paradise on the Earth</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{height: '88vh',}}>
          <img
            className='d-block w-100'
            src={teide}
            alt='teide'
          />
          <Carousel.Caption className='bg-info rounded'>
            <h3 className='h3'>Teide Volcano</h3>
            <p>The height of the volcano is 3783 meters above sea level</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{height: '88vh',}}>
          <img
            className='d-block w-100'
            src={blackSand}
            alt='blackSand'
          />
          <Carousel.Caption className='bg-info rounded'>
            <h3 className='h3'>Black sand beaches</h3>
            <p>There are a lot of beaches with volcano sand - black color</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
  }
}