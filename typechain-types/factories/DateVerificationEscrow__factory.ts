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
import type {
  DateVerificationEscrow,
  DateVerificationEscrowInterface,
} from "../DateVerificationEscrow";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "participant",
        type: "address",
      },
    ],
    name: "AttendanceConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "participant1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "participant2",
        type: "address",
      },
    ],
    name: "DateMade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "participant1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "participant2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "participant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "StakeMade",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dateId",
        type: "string",
      },
    ],
    name: "confirmAttendance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "dates",
    outputs: [
      {
        internalType: "address",
        name: "participant1",
        type: "address",
      },
      {
        internalType: "address",
        name: "participant2",
        type: "address",
      },
      {
        internalType: "bool",
        name: "participant1Staked",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "participant2Staked",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "participant1Confirmed",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "participant2Confirmed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dateId",
        type: "string",
      },
      {
        internalType: "address",
        name: "participant1",
        type: "address",
      },
      {
        internalType: "address",
        name: "participant2",
        type: "address",
      },
    ],
    name: "initDate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dateId",
        type: "string",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052606460005534801561001557600080fd5b506112b7806100256000396000f3fe60806040526004361061003f5760003560e01c806346f45b8d146100445780635545192b146100605780638f21a98b146100a2578063e0db6b4e146100cb575b600080fd5b61005e60048036038101906100599190610dda565b6100f4565b005b34801561006c57600080fd5b5061008760048036038101906100829190610dda565b610102565b60405161009996959493929190610e7f565b60405180910390f35b3480156100ae57600080fd5b506100c960048036038101906100c49190610f0c565b6101c8565b005b3480156100d757600080fd5b506100f260048036038101906100ed9190610dda565b61039a565b005b6100ff8133346108e8565b50565b6001818051602081018201805184825260208301602085012081835280955050505050506000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160149054906101000a900460ff16908060010160159054906101000a900460ff16908060010160169054906101000a900460ff16908060010160179054906101000a900460ff16905086565b6040518060c001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000151581526020016000151581526020016000151581525060018460405161023d9190610fec565b908152602001604051809103902060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff02191690831515021790555060608201518160010160156101000a81548160ff02191690831515021790555060808201518160010160166101000a81548160ff02191690831515021790555060a08201518160010160176101000a81548160ff0219169083151502179055509050507fd0957701c42a21d355d0217742c290075550d35b1ada33f346efa42cc30251d9828260405161038d929190611003565b60405180910390a1505050565b60006001826040516103ac9190610fec565b90815260200160405180910390206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff161515151581526020016001820160159054906101000a900460ff161515151581526020016001820160169054906101000a900460ff161515151581526020016001820160179054906101000a900460ff1615151515815250509050806000015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061054c5750806020015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61058b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058290611089565b60405180910390fd5b806000015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361065e5760011515816040015115151461060d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610604906110f5565b60405180910390fd5b60018160800190151590811515815250507f477c1e1d64d9dbdbe61a4df6a2a639256c0b948715fe0531fae4b4326059c22581600001516040516106519190611115565b60405180910390a161072e565b806020015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361072d576001151581604001511515146106e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d7906110f5565b60405180910390fd5b60018160a00190151590811515815250507f477c1e1d64d9dbdbe61a4df6a2a639256c0b948715fe0531fae4b4326059c22581602001516040516107249190611115565b60405180910390a15b5b8060800151801561074057508060a001515b156108e457806000015173ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f19350505050158015610791573d6000803e3d6000fd5b50806020015173ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f193505050501580156107de573d6000803e3d6000fd5b507feed10c470424824e4a4309075162f10b9989088b23fbed2349698cedd44493fb8160000151826020015160005460405161081c93929190611149565b60405180910390a16001826040516108349190610fec565b9081526020016040518091039020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff02191690556001820160156101000a81549060ff02191690556001820160166101000a81549060ff02191690556001820160176101000a81549060ff021916905550505b5050565b60006001846040516108fa9190610fec565b90815260200160405180910390206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff161515151581526020016001820160159054906101000a900460ff161515151581526020016001820160169054906101000a900460ff161515151581526020016001820160179054906101000a900460ff1615151515815250509050806000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610a9a5750806020015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b610ad9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad090611089565b60405180910390fd5b600054821015610b1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b15906111cc565b60405180910390fd5b806000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610bb057600015158160400151151514610ba0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9790611238565b60405180910390fd5b6001151581604001515050610c3f565b806020015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c3e57600015158160600151151514610c32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2990611238565b60405180910390fd5b60011515816060015150505b5b7f780e3621aba404e9552a77b2c33fee36c6ec3d77262598566cc32449aa6aa71233600054604051610c72929190611258565b60405180910390a150505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610ce782610c9e565b810181811067ffffffffffffffff82111715610d0657610d05610caf565b5b80604052505050565b6000610d19610c80565b9050610d258282610cde565b919050565b600067ffffffffffffffff821115610d4557610d44610caf565b5b610d4e82610c9e565b9050602081019050919050565b82818337600083830152505050565b6000610d7d610d7884610d2a565b610d0f565b905082815260208101848484011115610d9957610d98610c99565b5b610da4848285610d5b565b509392505050565b600082601f830112610dc157610dc0610c94565b5b8135610dd1848260208601610d6a565b91505092915050565b600060208284031215610df057610def610c8a565b5b600082013567ffffffffffffffff811115610e0e57610e0d610c8f565b5b610e1a84828501610dac565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e4e82610e23565b9050919050565b610e5e81610e43565b82525050565b60008115159050919050565b610e7981610e64565b82525050565b600060c082019050610e946000830189610e55565b610ea16020830188610e55565b610eae6040830187610e70565b610ebb6060830186610e70565b610ec86080830185610e70565b610ed560a0830184610e70565b979650505050505050565b610ee981610e43565b8114610ef457600080fd5b50565b600081359050610f0681610ee0565b92915050565b600080600060608486031215610f2557610f24610c8a565b5b600084013567ffffffffffffffff811115610f4357610f42610c8f565b5b610f4f86828701610dac565b9350506020610f6086828701610ef7565b9250506040610f7186828701610ef7565b9150509250925092565b600081519050919050565b600081905092915050565b60005b83811015610faf578082015181840152602081019050610f94565b60008484015250505050565b6000610fc682610f7b565b610fd08185610f86565b9350610fe0818560208601610f91565b80840191505092915050565b6000610ff88284610fbb565b915081905092915050565b60006040820190506110186000830185610e55565b6110256020830184610e55565b9392505050565b600082825260208201905092915050565b7f4e6f742061207061727469636970616e74000000000000000000000000000000600082015250565b600061107360118361102c565b915061107e8261103d565b602082019050919050565b600060208201905081810360008301526110a281611066565b9050919050565b7f5374616b65206e6f7420616c7265616479206d61646500000000000000000000600082015250565b60006110df60168361102c565b91506110ea826110a9565b602082019050919050565b6000602082019050818103600083015261110e816110d2565b9050919050565b600060208201905061112a6000830184610e55565b92915050565b6000819050919050565b61114381611130565b82525050565b600060608201905061115e6000830186610e55565b61116b6020830185610e55565b611178604083018461113a565b949350505050565b7f4e6f7420656e6f756768207374616b6520616d6f756e74000000000000000000600082015250565b60006111b660178361102c565b91506111c182611180565b602082019050919050565b600060208201905081810360008301526111e5816111a9565b9050919050565b7f5374616b6520616c7265616479206d6164650000000000000000000000000000600082015250565b600061122260128361102c565b915061122d826111ec565b602082019050919050565b6000602082019050818103600083015261125181611215565b9050919050565b600060408201905061126d6000830185610e55565b61127a602083018461113a565b939250505056fea2646970667358221220a2523566786aca7b371c1983d8bea14c78747b44654c0d4f7a47378d422f9ced64736f6c63430008180033";

type DateVerificationEscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DateVerificationEscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DateVerificationEscrow__factory extends ContractFactory {
  constructor(...args: DateVerificationEscrowConstructorParams) {
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
      DateVerificationEscrow & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DateVerificationEscrow__factory {
    return super.connect(runner) as DateVerificationEscrow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DateVerificationEscrowInterface {
    return new Interface(_abi) as DateVerificationEscrowInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DateVerificationEscrow {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DateVerificationEscrow;
  }
}
