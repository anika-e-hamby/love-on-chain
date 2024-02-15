
type TransactionCompleteStepProps = {
  stake: number;
  confirmAttendance: () => Promise<void>;
};

export default function TransactionCompleteStep({
  stake,
  confirmAttendance
}: TransactionCompleteStepProps) {
  

  return (
    <>
      <h2 className="mb-5 w-full text-center text-2xl font-semibold text-black">
        You staked {stake} ETH and your date is confirmed!
      </h2>

      <div className="text-center text-6xl">❤️</div>

      <div className="my-4 text-center text-sm text-gray-400">
        Better not ghost your date 👻!
      </div>

      <div className="flex justify-center">
        <button className=" bg-pink-100 p-2 rounded-xl w-15" type="button" onClick={confirmAttendance}>Confirm Attendance</button>
      </div>
    </>
  );
}
