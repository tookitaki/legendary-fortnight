import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const style = {
    textAlign : 'center',
    fontSize: '16px',
    color: '#31394D'
  }
  return (
    <div style={style}>
      <h4 style={{fontSize: '24px', marginTop:'20px', marginBottom:'20px'}}>
        404 Page Not Found
      </h4>
      <p>Sorry, we cannot find the page you are looking for or you don&apos;t 
        currently have the permission to access.</p>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default NotFoundPage;