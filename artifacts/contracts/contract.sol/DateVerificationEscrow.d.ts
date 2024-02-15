// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface DateVerificationEscrow$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "DateVerificationEscrow",
  "sourceName": "contracts/contract.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "participant",
          "type": "address"
        }
      ],
      "name": "AttendanceConfirmed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "participant1",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "participant2",
          "type": "address"
        }
      ],
      "name": "DateMade",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "participant1",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "participant2",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "FundsReleased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "participant",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "StakeMade",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "dateId",
          "type": "string"
        }
      ],
      "name": "confirmAttendance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "dateId",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "confirmAttendanceInt",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "dates",
      "outputs": [
        {
          "internalType": "address",
          "name": "participant1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "participant2",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "participant1Staked",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "participant2Staked",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "participant1Confirmed",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "participant2Confirmed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "dateId",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "participant1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "participant2",
          "type": "address"
        }
      ],
      "name": "initDate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakerAddress",
          "type": "address"
        }
      ],
      "name": "launch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "dateId",
          "type": "string"
        }
      ],
      "name": "stake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "dateId",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "stakeInt",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": "0x6080604052606460005534801561001557600080fd5b5061165a806100256000396000f3fe6080604052600436106100745760003560e01c80635545192b1161004e5780635545192b146100eb5780638f21a98b1461012d578063e0db6b4e14610156578063f2166d341461017f5761007b565b8063214013ca1461007d57806346f45b8d146100a657806351b3b982146100c25761007b565b3661007b57005b005b34801561008957600080fd5b506100a4600480360381019061009f9190610f00565b61019b565b005b6100c060048036038101906100bb9190611073565b6101df565b005b3480156100ce57600080fd5b506100e960048036038101906100e491906110bc565b6101ed565b005b3480156100f757600080fd5b50610112600480360381019061010d9190611073565b61081f565b60405161012496959493929190611142565b60405180910390f35b34801561013957600080fd5b50610154600480360381019061014f91906111a3565b6108e5565b005b34801561016257600080fd5b5061017d60048036038101906101789190611073565b610ab7565b005b61019960048036038101906101949190611248565b610ac4565b005b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6101ea813334610ac4565b50565b60006002836040516101ff9190611328565b908152602001604051809103902090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806102bc57508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6102fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f29061139c565b60405180910390fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610420578060010160149054906101000a900460ff166103a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039a90611408565b60405180910390fd5b60018160010160166101000a81548160ff0219169083151502179055507f477c1e1d64d9dbdbe61a4df6a2a639256c0b948715fe0531fae4b4326059c2258160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516104139190611428565b60405180910390a1610542565b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610541578060010160159054906101000a900460ff166104c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bf90611408565b60405180910390fd5b60018160010160176101000a81548160ff0219169083151502179055507f477c1e1d64d9dbdbe61a4df6a2a639256c0b948715fe0531fae4b4326059c2258160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516105389190611428565b60405180910390a15b5b8060010160169054906101000a900460ff16801561056e57508060010160179054906101000a900460ff165b1561081a576000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16632939cde26040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156105e257600080fd5b505af11580156105f6573d6000803e3d6000fd5b505050508160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f19350505050158015610666573d6000803e3d6000fd5b508160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f193505050501580156106d3573d6000803e3d6000fd5b507feed10c470424824e4a4309075162f10b9989088b23fbed2349698cedd44493fb8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660005460405161075193929190611452565b60405180910390a16002846040516107699190611328565b9081526020016040518091039020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff02191690556001820160156101000a81549060ff02191690556001820160166101000a81549060ff02191690556001820160176101000a81549060ff02191690555050505b505050565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160149054906101000a900460ff16908060010160159054906101000a900460ff16908060010160169054906101000a900460ff16908060010160179054906101000a900460ff16905086565b6040518060c001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000151581526020016000151581526020016000151581525060028460405161095a9190611328565b908152602001604051809103902060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff02191690831515021790555060608201518160010160156101000a81548160ff02191690831515021790555060808201518160010160166101000a81548160ff02191690831515021790555060a08201518160010160176101000a81548160ff0219169083151502179055509050507fd0957701c42a21d355d0217742c290075550d35b1ada33f346efa42cc30251d98282604051610aaa929190611489565b60405180910390a1505050565b610ac181336101ed565b50565b6000600284604051610ad69190611328565b908152602001604051809103902090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610b9357508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b610bd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc99061139c565b60405180910390fd5b600054821015610c17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0e906114fe565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610d0f57600015158260010160149054906101000a900460ff16151514610ced576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce49061156a565b60405180910390fd5b60018260010160146101000a81548160ff021916908315150217905550610ddd565b8160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610ddc57600015158260010160159054906101000a900460ff16151514610dbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db59061156a565b60405180910390fd5b60018260010160156101000a81548160ff0219169083151502179055505b5b8073ffffffffffffffffffffffffffffffffffffffff16633a4b66f16000546002610e0891906115b9565b6040518263ffffffff1660e01b81526004016000604051808303818588803b158015610e3357600080fd5b505af1158015610e47573d6000803e3d6000fd5b50505050507f780e3621aba404e9552a77b2c33fee36c6ec3d77262598566cc32449aa6aa71233600054604051610e7f9291906115fb565b60405180910390a15050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ecd82610ea2565b9050919050565b610edd81610ec2565b8114610ee857600080fd5b50565b600081359050610efa81610ed4565b92915050565b600060208284031215610f1657610f15610e98565b5b6000610f2484828501610eeb565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f8082610f37565b810181811067ffffffffffffffff82111715610f9f57610f9e610f48565b5b80604052505050565b6000610fb2610e8e565b9050610fbe8282610f77565b919050565b600067ffffffffffffffff821115610fde57610fdd610f48565b5b610fe782610f37565b9050602081019050919050565b82818337600083830152505050565b600061101661101184610fc3565b610fa8565b90508281526020810184848401111561103257611031610f32565b5b61103d848285610ff4565b509392505050565b600082601f83011261105a57611059610f2d565b5b813561106a848260208601611003565b91505092915050565b60006020828403121561108957611088610e98565b5b600082013567ffffffffffffffff8111156110a7576110a6610e9d565b5b6110b384828501611045565b91505092915050565b600080604083850312156110d3576110d2610e98565b5b600083013567ffffffffffffffff8111156110f1576110f0610e9d565b5b6110fd85828601611045565b925050602061110e85828601610eeb565b9150509250929050565b61112181610ec2565b82525050565b60008115159050919050565b61113c81611127565b82525050565b600060c0820190506111576000830189611118565b6111646020830188611118565b6111716040830187611133565b61117e6060830186611133565b61118b6080830185611133565b61119860a0830184611133565b979650505050505050565b6000806000606084860312156111bc576111bb610e98565b5b600084013567ffffffffffffffff8111156111da576111d9610e9d565b5b6111e686828701611045565b93505060206111f786828701610eeb565b925050604061120886828701610eeb565b9150509250925092565b6000819050919050565b61122581611212565b811461123057600080fd5b50565b6000813590506112428161121c565b92915050565b60008060006060848603121561126157611260610e98565b5b600084013567ffffffffffffffff81111561127f5761127e610e9d565b5b61128b86828701611045565b935050602061129c86828701610eeb565b92505060406112ad86828701611233565b9150509250925092565b600081519050919050565b600081905092915050565b60005b838110156112eb5780820151818401526020810190506112d0565b60008484015250505050565b6000611302826112b7565b61130c81856112c2565b935061131c8185602086016112cd565b80840191505092915050565b600061133482846112f7565b915081905092915050565b600082825260208201905092915050565b7f4e6f742061207061727469636970616e74000000000000000000000000000000600082015250565b600061138660118361133f565b915061139182611350565b602082019050919050565b600060208201905081810360008301526113b581611379565b9050919050565b7f5374616b65206e6f7420616c7265616479206d61646500000000000000000000600082015250565b60006113f260168361133f565b91506113fd826113bc565b602082019050919050565b60006020820190508181036000830152611421816113e5565b9050919050565b600060208201905061143d6000830184611118565b92915050565b61144c81611212565b82525050565b60006060820190506114676000830186611118565b6114746020830185611118565b6114816040830184611443565b949350505050565b600060408201905061149e6000830185611118565b6114ab6020830184611118565b9392505050565b7f4e6f7420656e6f756768207374616b6520616d6f756e74000000000000000000600082015250565b60006114e860178361133f565b91506114f3826114b2565b602082019050919050565b60006020820190508181036000830152611517816114db565b9050919050565b7f5374616b6520616c7265616479206d6164650000000000000000000000000000600082015250565b600061155460128361133f565b915061155f8261151e565b602082019050919050565b6000602082019050818103600083015261158381611547565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115c482611212565b91506115cf83611212565b92508282026115dd81611212565b915082820484148315176115f4576115f361158a565b5b5092915050565b60006040820190506116106000830185611118565b61161d6020830184611443565b939250505056fea26469706673582212201447b817fb6165d8652ce641a4ec34d9013bfc00dda31f04bf8f1bfce993d58d64736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436106100745760003560e01c80635545192b1161004e5780635545192b146100eb5780638f21a98b1461012d578063e0db6b4e14610156578063f2166d341461017f5761007b565b8063214013ca1461007d57806346f45b8d146100a657806351b3b982146100c25761007b565b3661007b57005b005b34801561008957600080fd5b506100a4600480360381019061009f9190610f00565b61019b565b005b6100c060048036038101906100bb9190611073565b6101df565b005b3480156100ce57600080fd5b506100e960048036038101906100e491906110bc565b6101ed565b005b3480156100f757600080fd5b50610112600480360381019061010d9190611073565b61081f565b60405161012496959493929190611142565b60405180910390f35b34801561013957600080fd5b50610154600480360381019061014f91906111a3565b6108e5565b005b34801561016257600080fd5b5061017d60048036038101906101789190611073565b610ab7565b005b61019960048036038101906101949190611248565b610ac4565b005b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6101ea813334610ac4565b50565b60006002836040516101ff9190611328565b908152602001604051809103902090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806102bc57508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6102fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f29061139c565b60405180910390fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610420578060010160149054906101000a900460ff166103a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039a90611408565b60405180910390fd5b60018160010160166101000a81548160ff0219169083151502179055507f477c1e1d64d9dbdbe61a4df6a2a639256c0b948715fe0531fae4b4326059c2258160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516104139190611428565b60405180910390a1610542565b8060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610541578060010160159054906101000a900460ff166104c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bf90611408565b60405180910390fd5b60018160010160176101000a81548160ff0219169083151502179055507f477c1e1d64d9dbdbe61a4df6a2a639256c0b948715fe0531fae4b4326059c2258160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516105389190611428565b60405180910390a15b5b8060010160169054906101000a900460ff16801561056e57508060010160179054906101000a900460ff165b1561081a576000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16632939cde26040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156105e257600080fd5b505af11580156105f6573d6000803e3d6000fd5b505050508160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f19350505050158015610666573d6000803e3d6000fd5b508160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f193505050501580156106d3573d6000803e3d6000fd5b507feed10c470424824e4a4309075162f10b9989088b23fbed2349698cedd44493fb8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660005460405161075193929190611452565b60405180910390a16002846040516107699190611328565b9081526020016040518091039020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff02191690556001820160156101000a81549060ff02191690556001820160166101000a81549060ff02191690556001820160176101000a81549060ff02191690555050505b505050565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160149054906101000a900460ff16908060010160159054906101000a900460ff16908060010160169054906101000a900460ff16908060010160179054906101000a900460ff16905086565b6040518060c001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000151581526020016000151581526020016000151581525060028460405161095a9190611328565b908152602001604051809103902060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff02191690831515021790555060608201518160010160156101000a81548160ff02191690831515021790555060808201518160010160166101000a81548160ff02191690831515021790555060a08201518160010160176101000a81548160ff0219169083151502179055509050507fd0957701c42a21d355d0217742c290075550d35b1ada33f346efa42cc30251d98282604051610aaa929190611489565b60405180910390a1505050565b610ac181336101ed565b50565b6000600284604051610ad69190611328565b908152602001604051809103902090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610b9357508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b610bd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc99061139c565b60405180910390fd5b600054821015610c17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0e906114fe565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610d0f57600015158260010160149054906101000a900460ff16151514610ced576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce49061156a565b60405180910390fd5b60018260010160146101000a81548160ff021916908315150217905550610ddd565b8160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610ddc57600015158260010160159054906101000a900460ff16151514610dbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db59061156a565b60405180910390fd5b60018260010160156101000a81548160ff0219169083151502179055505b5b8073ffffffffffffffffffffffffffffffffffffffff16633a4b66f16000546002610e0891906115b9565b6040518263ffffffff1660e01b81526004016000604051808303818588803b158015610e3357600080fd5b505af1158015610e47573d6000803e3d6000fd5b50505050507f780e3621aba404e9552a77b2c33fee36c6ec3d77262598566cc32449aa6aa71233600054604051610e7f9291906115fb565b60405180910390a15050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ecd82610ea2565b9050919050565b610edd81610ec2565b8114610ee857600080fd5b50565b600081359050610efa81610ed4565b92915050565b600060208284031215610f1657610f15610e98565b5b6000610f2484828501610eeb565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f8082610f37565b810181811067ffffffffffffffff82111715610f9f57610f9e610f48565b5b80604052505050565b6000610fb2610e8e565b9050610fbe8282610f77565b919050565b600067ffffffffffffffff821115610fde57610fdd610f48565b5b610fe782610f37565b9050602081019050919050565b82818337600083830152505050565b600061101661101184610fc3565b610fa8565b90508281526020810184848401111561103257611031610f32565b5b61103d848285610ff4565b509392505050565b600082601f83011261105a57611059610f2d565b5b813561106a848260208601611003565b91505092915050565b60006020828403121561108957611088610e98565b5b600082013567ffffffffffffffff8111156110a7576110a6610e9d565b5b6110b384828501611045565b91505092915050565b600080604083850312156110d3576110d2610e98565b5b600083013567ffffffffffffffff8111156110f1576110f0610e9d565b5b6110fd85828601611045565b925050602061110e85828601610eeb565b9150509250929050565b61112181610ec2565b82525050565b60008115159050919050565b61113c81611127565b82525050565b600060c0820190506111576000830189611118565b6111646020830188611118565b6111716040830187611133565b61117e6060830186611133565b61118b6080830185611133565b61119860a0830184611133565b979650505050505050565b6000806000606084860312156111bc576111bb610e98565b5b600084013567ffffffffffffffff8111156111da576111d9610e9d565b5b6111e686828701611045565b93505060206111f786828701610eeb565b925050604061120886828701610eeb565b9150509250925092565b6000819050919050565b61122581611212565b811461123057600080fd5b50565b6000813590506112428161121c565b92915050565b60008060006060848603121561126157611260610e98565b5b600084013567ffffffffffffffff81111561127f5761127e610e9d565b5b61128b86828701611045565b935050602061129c86828701610eeb565b92505060406112ad86828701611233565b9150509250925092565b600081519050919050565b600081905092915050565b60005b838110156112eb5780820151818401526020810190506112d0565b60008484015250505050565b6000611302826112b7565b61130c81856112c2565b935061131c8185602086016112cd565b80840191505092915050565b600061133482846112f7565b915081905092915050565b600082825260208201905092915050565b7f4e6f742061207061727469636970616e74000000000000000000000000000000600082015250565b600061138660118361133f565b915061139182611350565b602082019050919050565b600060208201905081810360008301526113b581611379565b9050919050565b7f5374616b65206e6f7420616c7265616479206d61646500000000000000000000600082015250565b60006113f260168361133f565b91506113fd826113bc565b602082019050919050565b60006020820190508181036000830152611421816113e5565b9050919050565b600060208201905061143d6000830184611118565b92915050565b61144c81611212565b82525050565b60006060820190506114676000830186611118565b6114746020830185611118565b6114816040830184611443565b949350505050565b600060408201905061149e6000830185611118565b6114ab6020830184611118565b9392505050565b7f4e6f7420656e6f756768207374616b6520616d6f756e74000000000000000000600082015250565b60006114e860178361133f565b91506114f3826114b2565b602082019050919050565b60006020820190508181036000830152611517816114db565b9050919050565b7f5374616b6520616c7265616479206d6164650000000000000000000000000000600082015250565b600061155460128361133f565b915061155f8261151e565b602082019050919050565b6000602082019050818103600083015261158381611547565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115c482611212565b91506115cf83611212565b92508282026115dd81611212565b915082820484148315176115f4576115f361158a565b5b5092915050565b60006040820190506116106000830185611118565b61161d6020830184611443565b939250505056fea26469706673582212201447b817fb6165d8652ce641a4ec34d9013bfc00dda31f04bf8f1bfce993d58d64736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "DateVerificationEscrow",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<DateVerificationEscrow$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/contract.sol:DateVerificationEscrow",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<DateVerificationEscrow$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "DateVerificationEscrow",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<DateVerificationEscrow$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/contract.sol:DateVerificationEscrow",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<DateVerificationEscrow$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "DateVerificationEscrow",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<DateVerificationEscrow$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/contract.sol:DateVerificationEscrow",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<DateVerificationEscrow$Type["abi"]>>;
}