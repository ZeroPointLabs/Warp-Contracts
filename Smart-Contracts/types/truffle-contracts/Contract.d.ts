/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ContractContract extends Truffle.Contract<ContractInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ContractInstance>;
}

export interface Approval {
  name: "Approval";
  args: {
    owner: string;
    spender: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface Burn {
  name: "Burn";
  args: {
    sender: string;
    amount0: BN;
    amount1: BN;
    to: string;
    0: string;
    1: BN;
    2: BN;
    3: string;
  };
}

export interface Mint {
  name: "Mint";
  args: {
    sender: string;
    amount0: BN;
    amount1: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

export interface Swap {
  name: "Swap";
  args: {
    sender: string;
    amount0In: BN;
    amount1In: BN;
    amount0Out: BN;
    amount1Out: BN;
    to: string;
    0: string;
    1: BN;
    2: BN;
    3: BN;
    4: BN;
    5: string;
  };
}

export interface Sync {
  name: "Sync";
  args: {
    reserve0: BN;
    reserve1: BN;
    0: BN;
    1: BN;
  };
}

export interface Transfer {
  name: "Transfer";
  args: {
    from: string;
    to: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

type AllEvents = Approval | Burn | Mint | Swap | Sync | Transfer;

export interface ContractInstance extends Truffle.ContractInstance {
  DOMAIN_SEPARATOR(txDetails?: Truffle.TransactionDetails): Promise<string>;

  MINIMUM_LIQUIDITY(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  PERMIT_TYPEHASH(txDetails?: Truffle.TransactionDetails): Promise<string>;

  allowance(
    arg0: string,
    arg1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  approve: {
    (
      spender: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      spender: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  balanceOf(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  burn: {
    (to: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(to: string, txDetails?: Truffle.TransactionDetails): Promise<[BN, BN]>;
    sendTransaction(
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  factory(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getReserves(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN, BN]>;

  initialize: {
    (
      _token0: string,
      _token1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _token0: string,
      _token1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _token0: string,
      _token1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _token0: string,
      _token1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  kLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  mint: {
    (to: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(to: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
    sendTransaction(
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  nonces(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  permit: {
    (
      owner: string,
      spender: string,
      value: number | BN | string,
      deadline: number | BN | string,
      v: number | BN | string,
      r: string,
      s: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      owner: string,
      spender: string,
      value: number | BN | string,
      deadline: number | BN | string,
      v: number | BN | string,
      r: string,
      s: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      owner: string,
      spender: string,
      value: number | BN | string,
      deadline: number | BN | string,
      v: number | BN | string,
      r: string,
      s: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      owner: string,
      spender: string,
      value: number | BN | string,
      deadline: number | BN | string,
      v: number | BN | string,
      r: string,
      s: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  price0CumulativeLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  price1CumulativeLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  skim: {
    (to: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(to: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      to: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swap: {
    (
      amount0Out: number | BN | string,
      amount1Out: number | BN | string,
      to: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      amount0Out: number | BN | string,
      amount1Out: number | BN | string,
      to: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      amount0Out: number | BN | string,
      amount1Out: number | BN | string,
      to: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      amount0Out: number | BN | string,
      amount1Out: number | BN | string,
      to: string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  sync: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  token0(txDetails?: Truffle.TransactionDetails): Promise<string>;

  token1(txDetails?: Truffle.TransactionDetails): Promise<string>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  transfer: {
    (
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      from: string,
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      from: string,
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      from: string,
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      from: string,
      to: string,
      value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    DOMAIN_SEPARATOR(txDetails?: Truffle.TransactionDetails): Promise<string>;

    MINIMUM_LIQUIDITY(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    PERMIT_TYPEHASH(txDetails?: Truffle.TransactionDetails): Promise<string>;

    allowance(
      arg0: string,
      arg1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    approve: {
      (
        spender: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        spender: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        spender: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        spender: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    balanceOf(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    burn: {
      (to: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<[BN, BN]>;
      sendTransaction(
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    factory(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getReserves(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN, BN]>;

    initialize: {
      (
        _token0: string,
        _token1: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _token0: string,
        _token1: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _token0: string,
        _token1: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _token0: string,
        _token1: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    kLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    mint: {
      (to: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(to: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
      sendTransaction(
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    nonces(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

    permit: {
      (
        owner: string,
        spender: string,
        value: number | BN | string,
        deadline: number | BN | string,
        v: number | BN | string,
        r: string,
        s: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        owner: string,
        spender: string,
        value: number | BN | string,
        deadline: number | BN | string,
        v: number | BN | string,
        r: string,
        s: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        owner: string,
        spender: string,
        value: number | BN | string,
        deadline: number | BN | string,
        v: number | BN | string,
        r: string,
        s: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        owner: string,
        spender: string,
        value: number | BN | string,
        deadline: number | BN | string,
        v: number | BN | string,
        r: string,
        s: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    price0CumulativeLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    price1CumulativeLast(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    skim: {
      (to: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(to: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        to: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swap: {
      (
        amount0Out: number | BN | string,
        amount1Out: number | BN | string,
        to: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        amount0Out: number | BN | string,
        amount1Out: number | BN | string,
        to: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        amount0Out: number | BN | string,
        amount1Out: number | BN | string,
        to: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        amount0Out: number | BN | string,
        amount1Out: number | BN | string,
        to: string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

    sync: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    token0(txDetails?: Truffle.TransactionDetails): Promise<string>;

    token1(txDetails?: Truffle.TransactionDetails): Promise<string>;

    totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    transfer: {
      (
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    transferFrom: {
      (
        from: string,
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        from: string,
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
