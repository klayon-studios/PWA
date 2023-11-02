"use client";

import { useSmartAccount } from "@/hooks/SmartAccountContext";
import { getNFTsForAddress } from "@/lib/Alchemy";
import { useEffect, useState } from "react";

type NFTRes = {
  ownedNfts: any[];
  totalCount: number;
  blockHash: string;
};

export default function Inventory() {
  const { smartAccountAddress } = useSmartAccount();
  // const smartAccountAddress = "0x3A80BbB1d2fa5411E6129771d78e31d702C462e4";
  const [nfts, setNfts] = useState<NFTRes | null>();
  useEffect(() => {
    if (smartAccountAddress) {
      const getNfts = async () => {
        const data = await getNFTsForAddress(smartAccountAddress);
        setNfts(data);
      };
      getNfts();
    }
  }, []);

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold p-2">Inventory</h1>
      <div className="grid grid-cols-3 p-2">
        {nfts?.ownedNfts.map((nft, i) => <Item key={i} data={nft} />)}
      </div>
    </div>
  );
}

const Item = ({ data }: any) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden m-1 border border-muted-foreground">
      <img src="https://dl.openseauserdata.com/cache/originImage/files/b8c5130e888de1498955c18026d694d2.png" />
    </div>
  );
};
