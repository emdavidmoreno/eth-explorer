
import Web3 from "web3";

let web3 = null;
const projectToken = '648adb3c478d41578a9cc10678de0caa'

export const web3Connector = () => {
  if (web3 === null)
    web3 = new Web3(`https://mainnet.infura.io/v3/${projectToken}`);
  return web3
}

export const getLatestBlock = async () => {
  web3Connector()
  return await (await web3).eth.getBlock('latest')
}

export const getGasPrice = async () => {
  web3Connector()
  return await (await web3).eth.getGasPrice()
}

export const getBlockByNumber = async (number) => {
  web3Connector()
  return await (await web3).eth.getBlock(number)
}
export const getTransaction = async () => {
  web3Connector()
  return await (await web3).eth.getTransaction()
}