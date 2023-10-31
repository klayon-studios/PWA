import { encodePacked, keccak256 } from "viem";
import { formatAsHex } from "./user-operations";
// encodePacked(['int16', 'uint48'], [-1, 12])
// keccak256(encodePacked(['int16', 'uint48'], [-1, 12]))

export const hashMessageEIP191SolidityKeccak = (_address: string, _hash: string) => {
  const messagePrefix = "\x19Ethereum Signed Message:\n32";
  const address = formatAsHex(_address);
  const hash = formatAsHex(_hash);
  const message =
    address && hash
      ? keccak256(encodePacked(["address", "bytes32"], [address, hash]))
      : hash
      ? keccak256(encodePacked(["bytes32"], [hash]))
      : null;
  return message ? keccak256(encodePacked(["string", "bytes32"], [messagePrefix, message])) : null;
};
