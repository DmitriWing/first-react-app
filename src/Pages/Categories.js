import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import {ListGroupItem, ListGroup} from 'react-bootstrap';

export default function Categories(catId, onClickCategory){
    const [categories, setCategories] = React.useState([]);
    React.useEffect(() => {
        fetch('https://63dba2fac45e08a0434a0c57.mockapi.io/categories')
        .then((res) => {
            return res.json();
        })
        .then((arr) => {
            setCategories(arr);
        });
    }, []);

    // on click event handling
    // const [activeIndex, setActiveIndex] = React.useState(0);
    // const onClickCategory = (id) => {
    //     setActiveIndex(id);
    // };
    return(
        <>
        <Col sm={12}>
            <Nav fill variant='tabs' className='navbar navbar-light navbar-text bg-light rounded-2 mb-3'>
                <Nav.Item>
                    <Nav.Link 
                        // eventKey='0'
                        onClick={() => onClickCategory(0)}
                        className={catId === 0 ? 'active' : ''}>All
                    </Nav.Link>
                </Nav.Item>
                
                {categories.map((data) => (
                <Nav.Item>
                    <Nav.Link 
                    // eventKey={data.id}
                    onClick={() => onClickCategory(data.id)}
                    className={catId === data.id ? 'active' : ''}
                    > {data.name} </Nav.Link>
                </Nav.Item>
                ))}
            </Nav>
        </Col>


        {/* <h5 className='h5 text-center'>Categories</h5>
        <Card>
            <ListGroup variant='flash'>
                <ListGroupItem 
                action variant="info" 
                onClick={() => onClickCategory(0)}
                        // if true ? true : false
                className={activeIndex === 0 ? 'active' : ''}
                key="0">All</ListGroupItem>

                {categories.map((data) => (
                <ListGroupItem 
                action variant="info" 
                onClick={() => onClickCategory(data.id)} 
                className={activeIndex == data.id ? 'active' : ''}
                key={data.id}
                >{data.name}</ListGroupItem>
                ))}
            </ListGroup>
        </Card> */}
        
        
        </>
    )   //ends return
}