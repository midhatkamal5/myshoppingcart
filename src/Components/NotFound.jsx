import React from 'react';
import { Link } from 'react-router-dom';

function NotFound()
{
return(
    <>
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="text-center">
        <img className='NotFoundImage'src='notfound.png'></img>
        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Proceed to Home
        </Link>
      </div>
    </div>
    </>
);
}
export default NotFound;