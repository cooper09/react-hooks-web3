import React, { useContext }  from "react";

import BlockchainContext from './BlockchainContext.js';

export default function ChildComponent() {
  
  const blockchainContext = useContext(BlockchainContext);
  const { web3, contract, accounts } = blockchainContext;

  console.log("ChildComponent - network: ", web3 );
  console.log("ChildComponent - contract: ", contract );
  console.log("ChildComponent - account: ", accounts[0] );

  return (
    <div className="">
      <p>Hello there!</p>
    </div>

  );
}
