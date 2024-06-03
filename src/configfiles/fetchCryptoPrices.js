import fetch from 'node-fetch';
const ethUrl = 'https://openapiv1.coinstats.app/coins';

const headers = {
    'X-API-KEY': 'VCHByLkp/7751nFfRyQAQJ/0K70QBLjA/4C57FLRgio='
  
};

export async function fetchCryptoPrices() {
  try {
    const [ethResponse] = await Promise.all([
      fetch(ethUrl, { headers }),
    ]);

    const ethData = await ethResponse.json();
    // const bnbData = await bnbResponse.json();

    console.log(ethData);

    const ethPrice = ethData.result[1].price;
    const bnbPrice = ethData.result[0].price;
    // const bnbPrice = bnbData.data.coin.price;
    if (!ethPrice ) {
        throw new Error('Error: Could not retrieve crypto prices'); // Handle missing data gracefully
      }
  

    return { ethPrice, bnbPrice };
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
}