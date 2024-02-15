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
    stateMutability: "payable",
    type: "fallback",
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
        name: "dateId",
        type: "string",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "confirmAttendanceInt",
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
        internalType: "address",
        name: "_stakerAddress",
        type: "address",
      },
    ],
    name: "launch",
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
  {
    inputs: [
      {
        internalType: "string",
        name: "dateId",
        type: "string",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "stakeInt",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052606460005534801561001557600080fd5b506115dd806100256000396000f3fe6080604052600436106100745760003560e01c80635545192b1161004e5780635545192b146100eb5780638f21a98b1461012d578063e0db6b4e14610156578063f2166d341461017f5761007b565b8063214013ca1461007d57806346f45b8d146100a657806351b3b982146100c25761007b565b3661007b57005b005b34801561008957600080fd5b506100a4600480360381019061009f9190610ef4565b61019b565b005b6100c060048036038101906100bb9190611067565b6101df565b005b3480156100ce57600080fd5b506100e960048036038101906100e491906110b0565b6101ed565b005b3480156100f757600080fd5b50610112600480360381019061010d9190611067565b61081f565b60405161012496959493929190611136565b60405180910390f35b34801561013957600080fd5b50610154600480360381019061014f9190611197565b6108e5565b005b34801561016257600080fd5b5061017d60048036038101906101789190611067565b610ab7565b005b6101996004803603810190610194919061123c565b610ac4565b005b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6101ea813334610ac4565b50565b60006002836040516101ff919061131c565b908152602001604051809103902090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806102bc57508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6102fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f290611390565b60405180910390fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610420578060010160149054906101000a900460ff166103a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039a906113fc565b60405180910390fd5b60018160010160166101000a81548160ff0219169083151502179055507f477c1e1d64d9dbdbe61a4df6a2a639256c0b948715fe0531fae4b4326059c2258160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610413919061141c565b60405180910390a1610542565b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610541578060010160159054906101000a900460ff166104c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bf906113fc565b60405180910390fd5b60018160010160176101000a81548160ff0219169083151502179055507f477c1e1d64d9dbdbe61a4df6a2a639256c0b948715fe0531fae4b4326059c2258160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610538919061141c565b60405180910390a15b5b8060010160169054906101000a900460ff16801561056e57508060010160179054906101000a900460ff165b1561081a576000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16632939cde26040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156105e257600080fd5b505af11580156105f6573d6000803e3d6000fd5b505050508160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f19350505050158015610666573d6000803e3d6000fd5b508160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f193505050501580156106d3573d6000803e3d6000fd5b507feed10c470424824e4a4309075162f10b9989088b23fbed2349698cedd44493fb8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660005460405161075193929190611446565b60405180910390a1600284604051610769919061131c565b9081526020016040518091039020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff02191690556001820160156101000a81549060ff02191690556001820160166101000a81549060ff02191690556001820160176101000a81549060ff02191690555050505b505050565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160149054906101000a900460ff16908060010160159054906101000a900460ff16908060010160169054906101000a900460ff16908060010160179054906101000a900460ff16905086565b6040518060c001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000151581526020016000151581526020016000151581525060028460405161095a919061131c565b908152602001604051809103902060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff02191690831515021790555060608201518160010160156101000a81548160ff02191690831515021790555060808201518160010160166101000a81548160ff02191690831515021790555060a08201518160010160176101000a81548160ff0219169083151502179055509050507fd0957701c42a21d355d0217742c290075550d35b1ada33f346efa42cc30251d98282604051610aaa92919061147d565b60405180910390a1505050565b610ac181336101ed565b50565b6000600284604051610ad6919061131c565b908152602001604051809103902090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610b9357508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b610bd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc990611390565b60405180910390fd5b600054821015610c17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0e906114f2565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610d0f57600015158260010160149054906101000a900460ff16151514610ced576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce49061155e565b60405180910390fd5b60018260010160146101000a81548160ff021916908315150217905550610ddd565b8160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610ddc57600015158260010160159054906101000a900460ff16151514610dbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db59061155e565b60405180910390fd5b60018260010160156101000a81548160ff0219169083151502179055505b5b8073ffffffffffffffffffffffffffffffffffffffff16633a4b66f16000546040518263ffffffff1660e01b81526004016000604051808303818588803b158015610e2757600080fd5b505af1158015610e3b573d6000803e3d6000fd5b50505050507f780e3621aba404e9552a77b2c33fee36c6ec3d77262598566cc32449aa6aa71233600054604051610e7392919061157e565b60405180910390a15050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ec182610e96565b9050919050565b610ed181610eb6565b8114610edc57600080fd5b50565b600081359050610eee81610ec8565b92915050565b600060208284031215610f0a57610f09610e8c565b5b6000610f1884828501610edf565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f7482610f2b565b810181811067ffffffffffffffff82111715610f9357610f92610f3c565b5b80604052505050565b6000610fa6610e82565b9050610fb28282610f6b565b919050565b600067ffffffffffffffff821115610fd257610fd1610f3c565b5b610fdb82610f2b565b9050602081019050919050565b82818337600083830152505050565b600061100a61100584610fb7565b610f9c565b90508281526020810184848401111561102657611025610f26565b5b611031848285610fe8565b509392505050565b600082601f83011261104e5761104d610f21565b5b813561105e848260208601610ff7565b91505092915050565b60006020828403121561107d5761107c610e8c565b5b600082013567ffffffffffffffff81111561109b5761109a610e91565b5b6110a784828501611039565b91505092915050565b600080604083850312156110c7576110c6610e8c565b5b600083013567ffffffffffffffff8111156110e5576110e4610e91565b5b6110f185828601611039565b925050602061110285828601610edf565b9150509250929050565b61111581610eb6565b82525050565b60008115159050919050565b6111308161111b565b82525050565b600060c08201905061114b600083018961110c565b611158602083018861110c565b6111656040830187611127565b6111726060830186611127565b61117f6080830185611127565b61118c60a0830184611127565b979650505050505050565b6000806000606084860312156111b0576111af610e8c565b5b600084013567ffffffffffffffff8111156111ce576111cd610e91565b5b6111da86828701611039565b93505060206111eb86828701610edf565b92505060406111fc86828701610edf565b9150509250925092565b6000819050919050565b61121981611206565b811461122457600080fd5b50565b60008135905061123681611210565b92915050565b60008060006060848603121561125557611254610e8c565b5b600084013567ffffffffffffffff81111561127357611272610e91565b5b61127f86828701611039565b935050602061129086828701610edf565b92505060406112a186828701611227565b9150509250925092565b600081519050919050565b600081905092915050565b60005b838110156112df5780820151818401526020810190506112c4565b60008484015250505050565b60006112f6826112ab565b61130081856112b6565b93506113108185602086016112c1565b80840191505092915050565b600061132882846112eb565b915081905092915050565b600082825260208201905092915050565b7f4e6f742061207061727469636970616e74000000000000000000000000000000600082015250565b600061137a601183611333565b915061138582611344565b602082019050919050565b600060208201905081810360008301526113a98161136d565b9050919050565b7f5374616b65206e6f7420616c7265616479206d61646500000000000000000000600082015250565b60006113e6601683611333565b91506113f1826113b0565b602082019050919050565b60006020820190508181036000830152611415816113d9565b9050919050565b6000602082019050611431600083018461110c565b92915050565b61144081611206565b82525050565b600060608201905061145b600083018661110c565b611468602083018561110c565b6114756040830184611437565b949350505050565b6000604082019050611492600083018561110c565b61149f602083018461110c565b9392505050565b7f4e6f7420656e6f756768207374616b6520616d6f756e74000000000000000000600082015250565b60006114dc601783611333565b91506114e7826114a6565b602082019050919050565b6000602082019050818103600083015261150b816114cf565b9050919050565b7f5374616b6520616c7265616479206d6164650000000000000000000000000000600082015250565b6000611548601283611333565b915061155382611512565b602082019050919050565b600060208201905081810360008301526115778161153b565b9050919050565b6000604082019050611593600083018561110c565b6115a06020830184611437565b939250505056fea26469706673582212204b8a775f3479159c2d92705d423c45a1c591acf1fa524cd763c0cb058a3eaf1064736f6c63430008180033";

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