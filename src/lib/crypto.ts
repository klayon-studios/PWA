import { encodePacked, keccak256, toBytes } from "viem";
import { formatAsHex } from "./user-operations";
// import { unpackDERsignature } from "pbt-chip-client/kong";
// encodePacked(['int16', 'uint48'], [-1, 12])
// keccak256(encodePacked(['int16', 'uint48'], [-1, 12]))

export const hashMessageEIP191SolidityKeccak = (_address: string, _hash: string) => {
  // const messagePrefix = "\x19Ethereum Signed Message:\n32";
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

// export const hashMessageTest = (_address: string) => {
//   const messagePrefix = "\x19Ethereum Signed Message:\n32";
//   const address = formatAsHex(_address);
//   const message = address ? keccak256(encodePacked(["address"], [address])) : null;
//   return message ? keccak256(encodePacked(["string", "bytes32"], [messagePrefix, message])) : null;
// };

export const buf2hex = (buffer: ArrayBuffer) => {
  const uint8Array = new Uint8Array(buffer);
  let hexString = "";
  for (let i = 0; i < uint8Array.length; i++) {
    const hex = uint8Array[i].toString(16);
    hexString += hex.length === 1 ? "0" + hex : hex;
  }
  return hexString;
};
// export const buf2hex = (buffer: ArrayBuffer) => {
//   return [...new Uint8Array(buffer)]
//     .map((x) => x.toString(16).padStart(2, "0"))
//     .join("");
// };

export const unpackDERsignature = (signature: string) => {
  const header0 = signature.slice(0, 2);
  if (parseInt("0x" + header0) !== 0x30) {
    throw Error("Invalid header.");
  }

  const header_r0 = signature.slice(4, 6);
  const header_r1 = signature.slice(6, 8);

  if (parseInt("0x" + header_r0) !== 0x02) {
    throw Error("Invalid header (2).");
  }

  const length_r = parseInt("0x" + header_r1) * 2;
  let r = signature.slice(8, length_r + 8);

  const header_s0 = signature.slice(length_r + 8, length_r + 10);
  const header_s1 = signature.slice(length_r + 10, length_r + 12);

  if (parseInt("0x" + header_s0) !== 0x02) {
    throw Error("Invalid header (2).");
  }

  let s = signature.slice(length_r + 12, length_r + 12 + parseInt("0x" + header_s1) * 2);

  if (r.length == 66) {
    r = r.slice(2, 130);
  }

  if (s.length == 66) {
    s = s.slice(2, 130);
  }
  // sigSplit.r.padStart(64, "0");

  return {
    r: r.padStart(64, "0"),
    s,
  };
};
