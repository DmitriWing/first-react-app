import React, { Component } from 'react';
import { Container, Button, CardGroup, Card, Col, Row } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import CarouselBox from '../Components/CarouselBox';

export default class About extends Component{
  render() {
    return (
    <div>
      <CarouselBox className='h-50' />
      <Container className='mt-5 pb-5 mb-5'>
      <h2 className='h2 text-center p-3'>Wellcome home!!!</h2>

      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.insider.com/5fd3ed3be00bce00188bafac?width=700" />
            <Card.Body>
              <Card.Title>Eu consequat duis ea qui</Card.Title>
              <Card.Text>
                Nisi ad consequat nostrud dolore consectetur minim id aliqua officia officia non et voluptate officia. Incididunt aute velit deserunt Lorem officia veniam. Voluptate nisi anim nostrud consectetur duis quis. Proident veniam Lorem nisi nostrud incididunt sit ad esse aliqua. Eu consequat duis ea qui mollit nostrud incididunt proident do et id consectetur sint deserunt. Do nulla nulla aliquip fugiat exercitation sint ea nulla laboris do.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="https://static.independent.co.uk/2021/12/07/10/PRI213893584.jpg?width=1200" />
            <Card.Body>
              <Card.Title>Anim sit aliqua.</Card.Title>
              <Card.Text>
                Occaecat enim ullamco non magna Lorem enim magna aliqua aliqua. Proident irure excepteur deserunt aliqua aliquip labore cillum occaecat voluptate magna. Amet aliquip proident et velit eu irure fugiat. Ea officia ullamco eu pariatur esse deserunt consectetur eiusmod laboris ipsum Lorem. Eiusmod dolore ex anim adipisicing non elit officia commodo labore consequat duis aliquip commodo. In sit dolore cupidatat anim eu quis mollit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card>
            <Card.Img variant="top" src="https://www.localsyr.com/wp-content/uploads/sites/63/2022/05/Fattening-Up-by-Tommy-Jones.jpg?w=2040&h=1440&crop=1" />
            <Card.Body>
              <Card.Title>Labore quis fugiat.</Card.Title>
              <Card.Text>
                Excepteur enim elit velit cupidatat aute consequat enim laborum incididunt irure magna culpa incididunt Lorem. Labore officia velit cupidatat est culpa proident sit. Quis in ipsum culpa irure voluptate eiusmod culpa nulla id culpa. Culpa consequat officia elit anim velit veniam. Nostrud ipsum dolore ea reprehenderit aliqua officia ipsum laborum consectetur. Non eu magna ipsum aliqua adipisicing. Anim irure cupidatat occaecat sunt sit duis consectetur occaecat commodo in.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card>
            <Card.Img variant="top" src="https://www.wta.org/site_images/hikes/hike-image-2021-06-18-6390031235/@@download/image/picture%20lake.jpeg" />
            <Card.Body>
              <Card.Title>Mollit veniam ure esse.</Card.Title>
              <Card.Text>
                Ad veniam minim fugiat cillum labore sit dolor excepteur id do cupidatat. Reprehenderit duis sunt ipsum voluptate fugiat reprehenderit do eu quis ex aliqua minim. Reprehenderit elit dolore ipsum cillum. Nisi incididunt velit consequat ad nisi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>



      
      </Container>
    </div>
    );
  }
}