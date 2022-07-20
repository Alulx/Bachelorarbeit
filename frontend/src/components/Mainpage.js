import React from "react";
import Header from "./Header";
import { Loading } from "./Loading";
import{ SoulPrinter }from "./SoulPrinter";
import Landing from "./Landing"
import { ethers } from "ethers";

import SBTArtifact from "../contracts/SBT.json";
import contractAddress from "../contracts/contract-address.json";



import {NoWalletDetected }from "./NoWalletDetected";
import {ConnectWallet} from "./ConnectWallet"
const HARDHAT_NETWORK_ID = '1337'; 
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export class Mainpage extends React.Component {
  constructor(props) {
    super(props);

    // We store multiple things in Dapp's state.
    // You don't need to follow this pattern, but it's an useful example.
    this.initialState = {
    };

    this.state = this.initialState;
  }
  render(){
    //check if metamask is install
    if (window.ethereum === undefined) {
      return <NoWalletDetected />;
    }

    // a loading component.
    /* if (!this.state.tokenData || !this.state.balance) {
      return <Loading />;
    } */
    //Finally, Render the rests
    return(
      <div className="col-6 p-4 text-center">
        <Header/>     
        <Landing
            connectWallet={() => this._connectWallet()} 
        />
     
      </div>
    )

    
  

  }


  mint(){

  }

  async _connectWallet() {
    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.

    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Once we have the address, we can initialize the application.

    // First we check the network
    if (!this._checkNetwork()) {
      return;
    }

    this._initialize(selectedAddress);

    // We reinitialize it whenever the user changes their account.
    window.ethereum.on("accountsChanged", ([newAddress]) => {
      // `accountsChanged` event can be triggered with an undefined newAddress.
      // This happens when the user removes the Dapp from the "Connected
      // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
      // To avoid errors, we reset the dapp state 
      if (newAddress === undefined) {
        return this._resetState();
      }
      
      this._initialize(newAddress);
    });
    
    // We reset the dapp state if the network is changed
    window.ethereum.on("chainChanged", ([networkId]) => {
      this._resetState();
    });
  }

  _initialize(userAddress) {
    // This method initializes the dapp

    // We first store the user's address in the component's state
    this.setState({
      selectedAddress: userAddress,
    });

    // Then, we initialize ethers, fetch the token's data, and start polling
    // for the user's balance.

    // Fetching the token data and the user's balance are specific to this
    // sample project, but you can reuse the same initialization pattern.
    this._initializeEthers();
  }

  async _initializeEthers() {
    // We first initialize ethers by creating a provider using window.ethereum
    this._provider = new ethers.providers.Web3Provider(window.ethereum);

    // Then, we initialize the contract using that provider and the token's
    // artifact. You can do this same thing with your contracts.
    this.SBT = new ethers.Contract(
      contractAddress.SBT,
      SBTArtifact.abi,
      this._provider.getSigner(0)
    );
  }




    // This method just clears part of the state.
    _dismissTransactionError() {
      this.setState({ transactionError: undefined });
    }
  
    // This method just clears part of the state.
    _dismissNetworkError() {
      this.setState({ networkError: undefined });
    }
  
    // This is an utility method that turns an RPC error into a human readable
    // message.
    _getRpcErrorMessage(error) {
      if (error.data) {
        return error.data.message;
      }
  
      return error.message;
    }
  
    // This method resets the state
    _resetState() {
      this.setState(this.initialState);
    }
  
    // This method checks if Metamask selected network is Localhost:8545 
    _checkNetwork() {
      if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
        return true;
      }
  
      this.setState({ 
        networkError: 'Please connect Metamask to Localhost:8545'
      });
    }
}