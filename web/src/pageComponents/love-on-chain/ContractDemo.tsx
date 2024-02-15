import { useCallback, useEffect, useMemo, useState } from 'react';
import { clsx } from 'clsx';
import AccountConnect from '../../components/header/AccountConnect';
import { useLoveOnChainContract } from '../../hooks/contracts';
import { INVITES } from '../../mocks/userMocks';
import { Invite } from '../../types';
import MatchProfile from '../love-on-chain/MatchProfile';
import Profile from '../love-on-chain/Profile';
import DateConfirmation from './DateConfirmation';
import { writeContract } from '@wagmi/core'
import {wagmiConfig} from '../../providers/OnchainProviders';
export enum TransactionSteps {
  START_TRANSACTION_STEP,
  TRANSACTION_COMPLETE_STEP,
  OUT_OF_GAS_STEP,
  CONFIRM_ATTENDANCE_STEP,
}

export default function LoveOnChainContractDemo() {
  const [selectedInvite, setSelectedInvite] = useState<Invite>();
  const contract = useLoveOnChainContract();
  const onSelectMatch = useCallback( async (invite: Invite) => {
    setSelectedInvite(invite);

    await writeContract(wagmiConfig, {
      address: '0x5271F6dfE8080c1dc6E110E83D8687b54fAf1f9c',
      abi: contract.abi,
      functionName: 'initDate',
      args: [
          'anika-ana',
          '0x4046aF2e421651CFd6080B85A96d200be91C676B',
          '0xBa6618c6E109cA31F7E22e80557117f9813D5b49'
      ]
    });

    
  }, [setSelectedInvite])

  useEffect(() =>{
   console.log(selectedInvite);
  });

  const matches = useMemo(() => {
    return (
      <div className='flex flex-col gap-1'>
        {INVITES.map((invite) => (
            <MatchProfile key={invite.inviter.userName} invite={invite} selected={selectedInvite === invite} clickHandler={onSelectMatch}/>
        )) 
        }
      </div>
    );
  }, [selectedInvite, onSelectMatch]);

  return (
    <div>
      <AccountConnect/>
      <Profile/>
      <div className='flex flex-row gap-10'>
        <aside className='bg-white p-3 rounded-xl'>
        {selectedInvite ? <DateConfirmation dateInvite={selectedInvite}/> : <section>
          <h3 className="text-xl font-bold">My invites</h3>
            {matches}
        </section>}
        </aside>
      </div>
    </div>
  );
}
