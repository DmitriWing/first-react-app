import React from 'react';
import {Row, Col} from 'react-bootstrap';

export default function BlogPost({categoryId}){
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
      const category_id = categoryId > 0 ? `category_id=${categoryId}` : '';
      fetch('https://63dba2fac45e08a0434a0c57.mockapi.io/posts?sortBy=date&order=desc')
      .then((res) => {
          return res.json();
      })
      .then((arr) => {
          setPosts(arr);
      });
  }, [categoryId]);
  return(
    <>
    {posts.map((data) => (
      <Row className='mb-5 shadow d-flex justify-content-between' key={data.id}>
      <Col md='2'>
        <img
        width={150}
        height={150}
        className='me-auto'
        src={data.image}
        alt='logo' />
      </Col>
      <Col md='10 p-3'>
        <h4 className='h4 text-start'> Id: {data.id}; {data.title}</h4>
        <p className=''>{data.description}</p>
        <p className='text-end'>{data.date}</p>
      </Col>
    </Row>
    ))}
    


    </>
  );
}