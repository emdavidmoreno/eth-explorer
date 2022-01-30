
import Web3 from "web3";

let web3 = null;
const web3Eedpoint = process.env.REACT_APP_INFURA_MAINNET_ENDPOINT

export const web3Connector = () => {
  if (web3 === null)
    web3 = new Web3(web3Eedpoint);
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