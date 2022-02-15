import { useState, useEffect } from "react";
import { getBlockByNumber, getGasPrice, getLatestBlock } from "../utils/web3";
import BlockList from "./BlockList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Summary from "./Summary";


function App() {
  const [latestBlockNumber, setLatestBlockNumber] = useState(null);
  const [difficulty, setDifficulty] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [latestBlocks, setLatestBlocks] = useState([]);

  useEffect(() => {
    loadBlockchainData()
  }, [])

  const loadBlockchainData = async () => {

    const latestBlock = await getLatestBlock()
    setLatestBlockNumber(latestBlock.number)
    setDifficulty(latestBlock.difficulty)

    const currentGasPrice = await getGasPrice()
    setGasPrice(currentGasPrice)

    // get latest 10 blocks. TO DO pagination.
    const latestBlockArr = []
    for (let index = 0; index < 10; index++) {
      const block = await getBlockByNumber(latestBlock.number - index)
      latestBlockArr.push(block)
    }
    setLatestBlocks(latestBlockArr)
  }



  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex w-full mx-auto justify-center items-center bg-green-900">
        <div className="flex w-full max-x4xl py-32">
          <div className="w-full flex py-4">
            <Summary
              gasPrice={gasPrice}
              difficulty={difficulty}
              latestBlockNumber={latestBlockNumber}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto w-full max-w-4xl justify-end my-4 justify-between">
        <div className="w-full flex -mt-24 bg-white rounded-md shadow-md">
          <BlockList blocks={latestBlocks} />
        </div>
      </div>
      <div className="flex w-full mx-auto justify-center items-center bg-green-900 mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
