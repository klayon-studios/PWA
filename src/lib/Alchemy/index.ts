import { Address } from "viem";
import { env } from "../../../env.mjs";

export const getNFTsForAddress = async (address: Address) => {
  try {
    const url = `https://base-goerli.g.alchemy.com/nft/v2/${env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTs/?owner=${address}&withMetadata=true&pageSize=100`;
    const res = await fetch(url, {
      method: "GET",
    });
    console.log("res", res);
    if (!res.ok) {
      throw new Error(`Failed to fetch NFTs for address ${address}`);
    }
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
