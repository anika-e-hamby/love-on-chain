import { useCallback } from 'react';
import Button from '../../../components/Button/Button';
import { TransactionSteps } from '../ContractDemo';

type OutOfGasStepProps = {
  min_stake: number;
  setTransactionStep: React.Dispatch<React.SetStateAction<TransactionSteps | null>>;
};

export default function OutOfGasStep({
  min_stake,
  setTransactionStep,
}: OutOfGasStepProps) {
  const handleGotIt = useCallback(() => {
    setTransactionStep(null);
  }, [setTransactionStep]);

  return (
    <>
      <h2 className="mb-5 w-full text-center text-2xl font-semibold text-white">
        You&apos;re out of gas
      </h2>

      <div className="text-center text-6xl">⛽</div>

      <div className="my-4 text-center text-sm text-gray-400">
        Please fund your wallet with at least {String(min_stake)} ω and try committing to the date again.
      </div>

      <Button buttonContent="Got it" onClick={handleGotIt} />
    </>
  );
}
