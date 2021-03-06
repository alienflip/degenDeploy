/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface HasherInterface extends Interface {
  functions: {
    MiMCSponge: TypedFunctionDescription<{
      encode([xL_in, xR_in]: [BigNumberish, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class Hasher extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Hasher;
  attach(addressOrName: string): Hasher;
  deployed(): Promise<Hasher>;

  on(event: EventFilter | string, listener: Listener): Hasher;
  once(event: EventFilter | string, listener: Listener): Hasher;
  addListener(eventName: EventFilter | string, listener: Listener): Hasher;
  removeAllListeners(eventName: EventFilter | string): Hasher;
  removeListener(eventName: any, listener: Listener): Hasher;

  interface: HasherInterface;

  functions: {
    MiMCSponge(
      xL_in: BigNumberish,
      xR_in: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<{
      xL: BigNumber;
      xR: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "MiMCSponge(uint256,uint256)"(
      xL_in: BigNumberish,
      xR_in: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<{
      xL: BigNumber;
      xR: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  MiMCSponge(
    xL_in: BigNumberish,
    xR_in: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<{
    xL: BigNumber;
    xR: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "MiMCSponge(uint256,uint256)"(
    xL_in: BigNumberish,
    xR_in: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<{
    xL: BigNumber;
    xR: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  filters: {};

  estimate: {
    MiMCSponge(
      xL_in: BigNumberish,
      xR_in: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "MiMCSponge(uint256,uint256)"(
      xL_in: BigNumberish,
      xR_in: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}
