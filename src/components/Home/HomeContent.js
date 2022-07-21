import React from 'react';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import './HomeContent.css';

function HomeContent() {
  return (
    <Card className='card-center'>
      <div className='card-top'>
        <h1 className='card-title'>Welcome 歡迎</h1>
        <br />
        <p className='card-top-p'>
          A simple, clean, responsive morden website built by React.
        </p>
      </div>
      <div className='card-bottom'>
        <p className='card-bottom-p'>
          Welcome to my website. <br />
          Feel free to look around and get know more{' '}
          <Link className='link' to='/about me'>
            about me
          </Link>{' '}
          .<br />
          Check out my{' '}
          <Link className='link' to='/resume'>
            resume
          </Link>{' '}
          ,{' '}
          <Link className='link' to='/protfolio'>
            protfolio
          </Link>{' '}
          , or{' '}
          <Link className='link' to='/contact'>
            contact
          </Link>{' '}
          me. I like to make new friends!
        </p>
      </div>
    </Card>
  );
}

export default HomeContent;
