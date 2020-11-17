/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface UniswapLpOracleFactoryIContract
  extends Truffle.Contract<UniswapLpOracleFactoryIInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<UniswapLpOracleFactoryIInstance>;
}

type AllEvents = never;

export interface UniswapLpOracleFactoryIInstance
  extends Truffle.ContractInstance {
  /**
   * this function is marked as virtual as it is an abstracted function*
   * createNewOracle allows the owner of this contract to deploy a new oracle contract when a new asset is whitelisted
   */
  createNewOracles: {
    (
      _tokenA: string,
      _tokenB: string,
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _tokenA: string,
      _tokenB: string,
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _tokenA: string,
      _tokenB: string,
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _tokenA: string,
      _tokenB: string,
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  OneUSDC(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * getUnderlyingPrice allows for the price retrieval of a MoneyMarketInstances underlying asset
   * @param _MMI is the address of the MoneyMarketInstance whos asset price is being retrieved
   */
  getUnderlyingPrice: {
    (_MMI: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_MMI: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
    sendTransaction(
      _MMI: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _MMI: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  viewUnderlyingPrice(
    _MMI: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  viewPriceOfToken(
    token: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  methods: {
    /**
     * this function is marked as virtual as it is an abstracted function*
     * createNewOracle allows the owner of this contract to deploy a new oracle contract when a new asset is whitelisted
     */
    createNewOracles: {
      (
        _tokenA: string,
        _tokenB: string,
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _tokenA: string,
        _tokenB: string,
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _tokenA: string,
        _tokenB: string,
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _tokenA: string,
        _tokenB: string,
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    OneUSDC(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * getUnderlyingPrice allows for the price retrieval of a MoneyMarketInstances underlying asset
     * @param _MMI is the address of the MoneyMarketInstance whos asset price is being retrieved
     */
    getUnderlyingPrice: {
      (_MMI: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(_MMI: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
      sendTransaction(
        _MMI: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _MMI: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    viewUnderlyingPrice(
      _MMI: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    viewPriceOfToken(
      token: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
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
