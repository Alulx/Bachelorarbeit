import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App({connectWallet}) {
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
         
        </MDBContainer>
      </MDBNavbar>

      <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Decentralized Reputation</h1>
        <h4 className='mb-3'>Built on Soulbound Tokens</h4>
        <MDBBtn className='btn btn-primary' href='' role='button' onClick={connectWallet}>
          Connect with Wallet
        </MDBBtn>
      </div>
    </header>
  );
}
