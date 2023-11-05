import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Get NFT Metadata for a specific contract address and token ID
      const contractAddress = '0xYourContractAddress';
      const tokenId = 'YourTokenId';

      const metadata = await fetchNFTMetadata(contractAddress, tokenId);

      // Check the floor price of an NFT from an NFT marketplace
      const floorPrice = await checkNFTFloorPrice('YourCollectionSlug');

      // Check if a pending transaction got mined
      const transactionHash = '0xYourTransactionHash';
      const isMined = await checkTransactionMined(transactionHash);

      // Get NFT transfer history for an address
      const address = '0xYourAddress';
      const transferHistory = await getNFTTransferHistory(address);

      // Update the state with the results
      setTransactions({
        metadata,
        floorPrice,
        isMined,
        transferHistory,
      });
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>NFT Information</h1>
      <p>Metadata: {transactions.metadata}</p>
      <p>Floor Price: {transactions.floorPrice}</p>
      <p>Transaction Mined: {transactions.isMined ? 'Yes' : 'No'}</p>
      <p>Transfer History: {transactions.transferHistory}</p>
    </div>
  );
}

async function fetchNFTMetadata(contractAddress, tokenId) {
  // Implement the logic to fetch NFT metadata here
  // You can use Alchemy to call the tokenURI function and then fetch the metadata
  // Return the metadata
}

async function checkNFTFloorPrice(collectionSlug) {
  // Implement the logic to check the floor price of an NFT from a marketplace
  // You can use the marketplace API to fetch the floor price
  // Return the floor price
}

async function checkTransactionMined(transactionHash) {
  // Implement the logic to check if a pending transaction got mined
  // You can use Alchemy to get the transaction receipt and check the block number
  // Return true if mined, false if pending
}

async function getNFTTransferHistory(address) {
  // Implement the logic to get NFT transfer history for an address
  // You can use event listening to fetch the transfer history
  // Return the transfer history
}

export default App;
