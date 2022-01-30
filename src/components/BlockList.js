const BlockList = ({ blocks = [] }) => {
  return (
    <div className="flex w-full flex-col rounded-md border border-gray-100 p-4">
      <div className="flex w-full font-bold text-black py-2 text-xl text-green-700">Latest Blocks</div>
      {(blocks && blocks.length > 0) && blocks.map(block => (
        <div key={block.number} className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 border-b border-gray-200">
          <div className="flex flex-col">
            <div className="flex w-full">
              <div className="text-left px-2 text-gray-400 font-light">Block #</div>
              <div className="flex text-left px-2">{block.number}</div>
            </div>
            <div className="flex w-full">
              <div className="text-right px-2 text-gray-400 font-light">Timestamp</div>
              <div className="text-right px-2">{block.timestamp}</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full">
              <div className="text-left px-2 text-gray-400 font-light">Block Hash</div>
              <div className="text-left px-2">{block.hash.slice(0, 15)}...</div>
            </div>
            <div className="flex w-full">
              <div className="text-left px-2 text-gray-400 font-light">Miner</div>
              <div className="text-left px-2">{block.miner.slice(0, 15)}...</div>
            </div>
          </div>
        </div>
      ))}
      {(!blocks || blocks.length === 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 border-b border-gray-200">
          No blocks to show
        </div>
      )}
    </div>
  );
};

export default BlockList;