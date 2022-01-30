const SummaryInfo = ({ label, info }) => {
  return (
    <div className="flex flex-col w-full rounded shadow-md p-4 bg-green-50">
      <div className="font-light text-gray-400 uppercase">{label}</div>
      <div className="text-block uppercase text-green-600">{info}</div>
    </div>
  )
}
const Summary = ({
  latestBlockNumber = 0,
  difficulty = 0,
  gasPrice = 0,
}) => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-3 gap-4">
        <SummaryInfo
          label={'Latest block'}
          info={latestBlockNumber}
        />
        <SummaryInfo
          label={'Difficulty'}
          info={difficulty}
        />
        <SummaryInfo
          label={'gas price'}
          info={gasPrice}
        />
      </div>
    </div>
  );
};

export default Summary;