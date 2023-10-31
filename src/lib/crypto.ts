import { encodePacked, keccak256, toBytes } from "viem";
import { formatAsHex } from "./user-operations";

export const hashMessageEIP191SolidityKeccak = (_address: string, _hash: string) => {
  const address = formatAsHex(_address);
  const hash = formatAsHex(_hash);
  const message =
    address && hash
      ? keccak256(encodePacked(["address", "bytes32"], [address, hash]))
      : hash
      ? keccak256(encodePacked(["bytes32"], [hash]))
      : null;
  return message;
};
