/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface DateVerificationEscrowInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "confirmAttendance"
      | "confirmAttendanceInt"
      | "dates"
      | "initDate"
      | "launch"
      | "stake"
      | "stakeInt"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AttendanceConfirmed"
      | "DateMade"
      | "FundsReleased"
      | "StakeMade"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "confirmAttendance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmAttendanceInt",
    values: [string, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "dates", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initDate",
    values: [string, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "launch", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "stake", values: [string]): string;
  encodeFunctionData(
    functionFragment: "stakeInt",
    values: [string, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "confirmAttendance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmAttendanceInt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initDate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "launch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeInt", data: BytesLike): Result;
}

export namespace AttendanceConfirmedEvent {
  export type InputTuple = [participant: AddressLike];
  export type OutputTuple = [participant: string];
  export interface OutputObject {
    participant: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DateMadeEvent {
  export type InputTuple = [
    participant1: AddressLike,
    participant2: AddressLike
  ];
  export type OutputTuple = [participant1: string, participant2: string];
  export interface OutputObject {
    participant1: string;
    participant2: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundsReleasedEvent {
  export type InputTuple = [
    participant1: AddressLike,
    participant2: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    participant1: string,
    participant2: string,
    amount: bigint
  ];
  export interface OutputObject {
    participant1: string;
    participant2: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeMadeEvent {
  export type InputTuple = [participant: AddressLike, amount: BigNumberish];
  export type OutputTuple = [participant: string, amount: bigint];
  export interface OutputObject {
    participant: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DateVerificationEscrow extends BaseContract {
  connect(runner?: ContractRunner | null): DateVerificationEscrow;
  waitForDeployment(): Promise<this>;

  interface: DateVerificationEscrowInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  confirmAttendance: TypedContractMethod<
    [dateId: string],
    [void],
    "nonpayable"
  >;

  confirmAttendanceInt: TypedContractMethod<
    [dateId: string, sender: AddressLike],
    [void],
    "nonpayable"
  >;

  dates: TypedContractMethod<
    [arg0: string],
    [
      [string, string, boolean, boolean, boolean, boolean] & {
        participant1: string;
        participant2: string;
        participant1Staked: boolean;
        participant2Staked: boolean;
        participant1Confirmed: boolean;
        participant2Confirmed: boolean;
      }
    ],
    "view"
  >;

  initDate: TypedContractMethod<
    [dateId: string, participant1: AddressLike, participant2: AddressLike],
    [void],
    "nonpayable"
  >;

  launch: TypedContractMethod<
    [_stakerAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  stake: TypedContractMethod<[dateId: string], [void], "payable">;

  stakeInt: TypedContractMethod<
    [dateId: string, sender: AddressLike, value: BigNumberish],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "confirmAttendance"
  ): TypedContractMethod<[dateId: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "confirmAttendanceInt"
  ): TypedContractMethod<
    [dateId: string, sender: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "dates"
  ): TypedContractMethod<
    [arg0: string],
    [
      [string, string, boolean, boolean, boolean, boolean] & {
        participant1: string;
        participant2: string;
        participant1Staked: boolean;
        participant2Staked: boolean;
        participant1Confirmed: boolean;
        participant2Confirmed: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "initDate"
  ): TypedContractMethod<
    [dateId: string, participant1: AddressLike, participant2: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "launch"
  ): TypedContractMethod<[_stakerAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<[dateId: string], [void], "payable">;
  getFunction(
    nameOrSignature: "stakeInt"
  ): TypedContractMethod<
    [dateId: string, sender: AddressLike, value: BigNumberish],
    [void],
    "payable"
  >;

  getEvent(
    key: "AttendanceConfirmed"
  ): TypedContractEvent<
    AttendanceConfirmedEvent.InputTuple,
    AttendanceConfirmedEvent.OutputTuple,
    AttendanceConfirmedEvent.OutputObject
  >;
  getEvent(
    key: "DateMade"
  ): TypedContractEvent<
    DateMadeEvent.InputTuple,
    DateMadeEvent.OutputTuple,
    DateMadeEvent.OutputObject
  >;
  getEvent(
    key: "FundsReleased"
  ): TypedContractEvent<
    FundsReleasedEvent.InputTuple,
    FundsReleasedEvent.OutputTuple,
    FundsReleasedEvent.OutputObject
  >;
  getEvent(
    key: "StakeMade"
  ): TypedContractEvent<
    StakeMadeEvent.InputTuple,
    StakeMadeEvent.OutputTuple,
    StakeMadeEvent.OutputObject
  >;

  filters: {
    "AttendanceConfirmed(address)": TypedContractEvent<
      AttendanceConfirmedEvent.InputTuple,
      AttendanceConfirmedEvent.OutputTuple,
      AttendanceConfirmedEvent.OutputObject
    >;
    AttendanceConfirmed: TypedContractEvent<
      AttendanceConfirmedEvent.InputTuple,
      AttendanceConfirmedEvent.OutputTuple,
      AttendanceConfirmedEvent.OutputObject
    >;

    "DateMade(address,address)": TypedContractEvent<
      DateMadeEvent.InputTuple,
      DateMadeEvent.OutputTuple,
      DateMadeEvent.OutputObject
    >;
    DateMade: TypedContractEvent<
      DateMadeEvent.InputTuple,
      DateMadeEvent.OutputTuple,
      DateMadeEvent.OutputObject
    >;

    "FundsReleased(address,address,uint256)": TypedContractEvent<
      FundsReleasedEvent.InputTuple,
      FundsReleasedEvent.OutputTuple,
      FundsReleasedEvent.OutputObject
    >;
    FundsReleased: TypedContractEvent<
      FundsReleasedEvent.InputTuple,
      FundsReleasedEvent.OutputTuple,
      FundsReleasedEvent.OutputObject
    >;

    "StakeMade(address,uint256)": TypedContractEvent<
      StakeMadeEvent.InputTuple,
      StakeMadeEvent.OutputTuple,
      StakeMadeEvent.OutputObject
    >;
    StakeMade: TypedContractEvent<
      StakeMadeEvent.InputTuple,
      StakeMadeEvent.OutputTuple,
      StakeMadeEvent.OutputObject
    >;
  };
}
