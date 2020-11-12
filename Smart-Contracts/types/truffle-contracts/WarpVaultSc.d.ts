/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface WarpVaultScContract
  extends Truffle.Contract<WarpVaultScInstance> {
  "new"(
    _InterestRate: string,
    _StableCoin: string,
    _warpControl: string,
    _warpTeam: string,
    _initialExchangeRate: number | BN | string,
    meta?: Truffle.TransactionDetails
  ): Promise<WarpVaultScInstance>;
}

export interface InterestAccrued {
  name: "InterestAccrued";
  args: {
    accrualBlockNumber: BN;
    borrowIndex: BN;
    totalBorrows: BN;
    totalReserves: BN;
    0: BN;
    1: BN;
    2: BN;
    3: BN;
  };
}

export interface LoanRepayed {
  name: "LoanRepayed";
  args: {
    _borrower: string;
    _repayAmount: BN;
    remainingPrinciple: BN;
    remainingInterest: BN;
    0: string;
    1: BN;
    2: BN;
    3: BN;
  };
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

export interface StableCoinLent {
  name: "StableCoinLent";
  args: {
    _lender: string;
    _amountLent: BN;
    _amountOfWarpMinted: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

export interface StableCoinWithdraw {
  name: "StableCoinWithdraw";
  args: {
    _lender: string;
    _amountWithdrawn: BN;
    _amountOfWarpBurnt: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

type AllEvents =
  | InterestAccrued
  | LoanRepayed
  | OwnershipTransferred
  | StableCoinLent
  | StableCoinWithdraw;

export interface WarpVaultScInstance extends Truffle.ContractInstance {
  InterestRate(txDetails?: Truffle.TransactionDetails): Promise<string>;

  WC(txDetails?: Truffle.TransactionDetails): Promise<string>;

  accountBorrows(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BN, BN]>;

  accrualBlockNumber(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  borrowIndex(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  collateralAddressTracker(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  collateralLocked(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  divisor(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  historicalReward(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  percent(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  principalBalance(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  reserveFactorMantissa(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  stablecoin(txDetails?: Truffle.TransactionDetails): Promise<string>;

  totalBorrows(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  totalReserves(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  wStableCoin(txDetails?: Truffle.TransactionDetails): Promise<string>;

  warpTeam(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * calculateFee is used to calculate the fee earned by the Warp Platform
   * @param _payedAmount is a uint representing the full amount of stablecoin earned as interest*
   */
  calculateFee(
    _payedAmount: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * This calculates interest accrued from the last checkpointed block up to the current block and writes new checkpoint to storage.*
   * Applies accrued interest to total borrows and reserves
   */
  accrueInterest: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * returns last calculated account's borrow balance using the prior borrowIndex
   * @param account The address whose balance should be calculated after updating borrowIndex
   */
  borrowBalancePrior(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Accrue interest to updated borrowIndex and then calculate account's borrow balance using the updated borrowIndex
   * @param account The address whose balance should be calculated after updating borrowIndex
   */
  borrowBalanceCurrent: {
    (account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(account: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
    sendTransaction(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Returns the current per-block borrow interest rate for this cToken
   */
  borrowRatePerBlock(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Returns the current per-block supply interest rate for this cToken
   */
  supplyRatePerBlock(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Returns the current total borrows plus accrued interest
   */
  totalBorrowsCurrent: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<BN>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * return the not up-to-date exchange rate
   */
  exchangeRatePrior(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Accrue interest then return the up-to-date exchange rate
   */
  exchangeRateCurrent: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<BN>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Get cash balance of this cToken in the underlying asset in other contracts
   */
  getCash(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * the user will need to first approve the transfer of the underlying asset*
   * lendToWarpVault is used to lend stablecoin assets to a WaprVault
   * @param _amount is the amount of the asset being lent
   */
  lendToWarpVault: {
    (
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * redeem allows a user to redeem their Warp Wrapper Token for the appropriate amount of underlying stablecoin asset
   * @param _amount is the amount of StableCoin the user wishes to exchange*
   */
  redeem: {
    (
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  viewAccountBalance(
    _account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  viewHistoricalReward(
    _account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Sender borrows stablecoin assets from the protocol to their own address
   * @param _borrowAmount The amount of the underlying asset to borrow
   */
  _borrow: {
    (
      _borrowAmount: number | BN | string,
      _borrower: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _borrowAmount: number | BN | string,
      _borrower: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _borrowAmount: number | BN | string,
      _borrower: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _borrowAmount: number | BN | string,
      _borrower: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Sender repays their own borrow
   * @param _repayAmount The amount to repay
   */
  repayBorrow: {
    (
      _repayAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _repayAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _repayAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _repayAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * this function uses the onlyWC modifier which means it can only be called by the Warp Control contract*
   * repayLiquidatedLoan is a function used by the Warp Control contract to repay a loan on behalf of a liquidator
   * @param _amount is the amount of StableCoin being repayed
   * @param _borrower is the address of the borrower who took out the loan
   * @param _liquidator is the address of the account who is liquidating the loan
   */
  _repayLiquidatedLoan: {
    (
      _borrower: string,
      _liquidator: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _borrower: string,
      _liquidator: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _borrower: string,
      _liquidator: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _borrower: string,
      _liquidator: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    InterestRate(txDetails?: Truffle.TransactionDetails): Promise<string>;

    WC(txDetails?: Truffle.TransactionDetails): Promise<string>;

    accountBorrows(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<[BN, BN]>;

    accrualBlockNumber(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    borrowIndex(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    collateralAddressTracker(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    collateralLocked(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    divisor(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    historicalReward(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    percent(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    principalBalance(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    reserveFactorMantissa(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    stablecoin(txDetails?: Truffle.TransactionDetails): Promise<string>;

    totalBorrows(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    totalReserves(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    wStableCoin(txDetails?: Truffle.TransactionDetails): Promise<string>;

    warpTeam(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * calculateFee is used to calculate the fee earned by the Warp Platform
     * @param _payedAmount is a uint representing the full amount of stablecoin earned as interest*
     */
    calculateFee(
      _payedAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * This calculates interest accrued from the last checkpointed block up to the current block and writes new checkpoint to storage.*
     * Applies accrued interest to total borrows and reserves
     */
    accrueInterest: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * returns last calculated account's borrow balance using the prior borrowIndex
     * @param account The address whose balance should be calculated after updating borrowIndex
     */
    borrowBalancePrior(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Accrue interest to updated borrowIndex and then calculate account's borrow balance using the updated borrowIndex
     * @param account The address whose balance should be calculated after updating borrowIndex
     */
    borrowBalanceCurrent: {
      (account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Returns the current per-block borrow interest rate for this cToken
     */
    borrowRatePerBlock(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Returns the current per-block supply interest rate for this cToken
     */
    supplyRatePerBlock(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Returns the current total borrows plus accrued interest
     */
    totalBorrowsCurrent: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<BN>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * return the not up-to-date exchange rate
     */
    exchangeRatePrior(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Accrue interest then return the up-to-date exchange rate
     */
    exchangeRateCurrent: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<BN>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Get cash balance of this cToken in the underlying asset in other contracts
     */
    getCash(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * the user will need to first approve the transfer of the underlying asset*
     * lendToWarpVault is used to lend stablecoin assets to a WaprVault
     * @param _amount is the amount of the asset being lent
     */
    lendToWarpVault: {
      (
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * redeem allows a user to redeem their Warp Wrapper Token for the appropriate amount of underlying stablecoin asset
     * @param _amount is the amount of StableCoin the user wishes to exchange*
     */
    redeem: {
      (
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    viewAccountBalance(
      _account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    viewHistoricalReward(
      _account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Sender borrows stablecoin assets from the protocol to their own address
     * @param _borrowAmount The amount of the underlying asset to borrow
     */
    _borrow: {
      (
        _borrowAmount: number | BN | string,
        _borrower: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _borrowAmount: number | BN | string,
        _borrower: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _borrowAmount: number | BN | string,
        _borrower: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _borrowAmount: number | BN | string,
        _borrower: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Sender repays their own borrow
     * @param _repayAmount The amount to repay
     */
    repayBorrow: {
      (
        _repayAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _repayAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _repayAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _repayAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * this function uses the onlyWC modifier which means it can only be called by the Warp Control contract*
     * repayLiquidatedLoan is a function used by the Warp Control contract to repay a loan on behalf of a liquidator
     * @param _amount is the amount of StableCoin being repayed
     * @param _borrower is the address of the borrower who took out the loan
     * @param _liquidator is the address of the account who is liquidating the loan
     */
    _repayLiquidatedLoan: {
      (
        _borrower: string,
        _liquidator: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _borrower: string,
        _liquidator: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _borrower: string,
        _liquidator: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _borrower: string,
        _liquidator: string,
        _amount: number | BN | string,
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
