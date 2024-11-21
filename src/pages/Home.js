import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import '../style/Homestyle.css';

function Home() {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url('/images/banner2.jpg')` }}>
        <div className='headercontainer'>
          <h1>Investments Website</h1>
          <p>At Blueline, we have a simple mission: to empower you to use your wealth to live a great life. </p>
          <Link to='/options'><button>Invest Now</button></Link>
        </div>
      </div>   
    </Layout>
  )
}

export default Home