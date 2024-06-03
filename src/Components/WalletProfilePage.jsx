import React, { useEffect, useState } from 'react';
import { fetchCryptoPrices } from '../configfiles/fetchCryptoPrices';

const WalletProfilePage = () => {
    const [ethPrice, setEthPrice] = useState(null);
    const [bnbPrice, setBnbPrice] = useState(null);
  
    useEffect(() => {
      const fetchPrices = async () => {
        try {
          const { ethPrice, bnbPrice } = await fetchCryptoPrices();
          setEthPrice(ethPrice);
          setBnbPrice(bnbPrice);
        } catch (error) {
          console.error('Error fetching crypto prices:', error);
        }
      };
  
      fetchPrices();
    }, []);
  return (
    <div>
    <h2>Wallet Profile</h2>
    <div>
      <h3>Current Cryptocurrency Prices</h3>
      <p>Ethereum (ETH): ${ethPrice}</p>
      <p>Binance Coin (BNB): ${bnbPrice}</p>
    </div>
  </div>
  )
}

export default WalletProfilePage