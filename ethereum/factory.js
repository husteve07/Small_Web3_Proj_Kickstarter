import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB71Cd90A99D647cad3704ABA3FBBC2aE28238De6'
);

export default instance;
