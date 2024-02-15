/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Staker, StakerInterface } from "../Staker";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "funstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102ee806100206000396000f3fe6080604052600436106100295760003560e01c80632939cde21461002e5780633a4b66f114610045575b600080fd5b34801561003a57600080fd5b5061004361004f565b005b61004d61017b565b005b600060026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461009c91906101f9565b9050600081116100e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100d890610298565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc82600261014c91906101f9565b9081150290604051600060405180830381858888f19350505050158015610177573d6000803e3d6000fd5b5050565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610204826101c0565b915061020f836101c0565b925082820261021d816101c0565b91508282048414831517610234576102336101ca565b5b5092915050565b600082825260208201905092915050565b7f4e6f207374616b6520746f207769746864726177000000000000000000000000600082015250565b600061028260148361023b565b915061028d8261024c565b602082019050919050565b600060208201905081810360008301526102b181610275565b905091905056fea26469706673582212207fb3ff6b55a8cb40e1f2f042f0f7dbc239b6238e8e564acb3341ff6993e20d9564736f6c63430008180033";

type StakerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staker__factory extends ContractFactory {
  constructor(...args: StakerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Staker & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Staker__factory {
    return super.connect(runner) as Staker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakerInterface {
    return new Interface(_abi) as StakerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Staker {
    return new Contract(address, _abi, runner) as unknown as Staker;
  }
}
