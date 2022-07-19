import React from "react";
import Header from "./Header";
import { Loading } from "./Loading";
import{ SoulPrinter }from "./SoulPrinter";
import Landing from "./Landing"

import NoWalletDetected from "./NoWalletDetected";
import ConnectWallet from "./ConnectWallet"

export class Mainpage extends React.Component {
  
 
  render(){
    //check if metamask is install
    if (window.ethereum === undefined) {
      return <NoWalletDetected />;
    }

    // put this shit in landing 
    if (!this.state.selectedAddress) {
      return (
        <ConnectWallet 
          connectWallet={() => this._connectWallet()} 
          networkError={this.state.networkError}
          dismiss={() => this._dismissNetworkError()}
        />
      );
    }

    // If the token data or the user's balance hasn't loaded yet, we show
    // a loading component.
    if (!this.state.tokenData || !this.state.balance) {
      return <Loading />;
    }
    //Finally, Render the rests
    return(
      <div className="col-6 p-4 text-center">
        <Header/>     
        <Landing
                function={() => this.connect()}
        />
     
      </div>
    )

    
  

  }


  mint(){

  }


}