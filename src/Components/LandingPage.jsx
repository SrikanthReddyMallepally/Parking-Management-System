import React from 'react';
import '../Styles/App.css';
import support from '../images/support.png';
import payment from '../images/payment1.png';
import parkingspot from '../images/parkingspot.png';

function Landing({ showLogin }){
  
    return(
    <div>
      <div className='landing-1'>
        <h1 className='landing-h1'>Park-IT </h1>
        <p className='landing-p'>A Parking Management Suite.</p>
      </div>
      <div className='services-container'>
        <div className='row-1'>
          <h2>Our Services</h2>
        </div>
        <div className='row-2'>
          <h3>24/7 Support</h3>
          <img className='row-2-img' src={support} alt="support"/>
          <p>facilitates support for all parking related issues, maintenance, and payments.</p>
        </div>
        <div className='row-2'>
          <h3>Rapid Spot Allocation</h3>
          <img className='row-2-img' src={parkingspot} alt="support"/>
          <p>Provides real-time spot availability and swift allocation of spots for existing residents, visitors and in emergencies </p>
          </div>
        <div className='row-2'>
          <h3>Payment Integration</h3>
          <img className='row-2-img' src={payment} alt="support"/>
          <p>Integrated payment system allows residents to pay online and access receipts.</p>
        </div>
      </div>
      <div className='landing-2'>
        <div className='cirrcle'>
          <p className='enter' onClick={showLogin}>Get into site</p>
        </div>
      </div>
    </div>
    );
}
export default Landing;
