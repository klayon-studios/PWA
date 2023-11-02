"use client";

import { getNFTsForAddress } from "@/lib/Alchemy";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useSmartAccount } from "@/hooks/SmartAccountContext";
import { useEffect, useState } from "react";

type NFTRes = {
  ownedNfts: any[];
  totalCount: number;
  blockHash: string;
};

export default function Inventory() {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();
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

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold p-2">Inventory</h1>
      <div className="grid grid-cols-3 p-2">
        {nfts &&
          nfts?.ownedNfts.length > 0 &&
          nfts.ownedNfts.map((nft, i) => (
            <Item key={i} metadata={nft.metadata} />
          ))}
      </div>
    </div>
  );
}

const Item = ({ metadata }: any) => {
  return (
    <div>
      <div className="rounded-lg shadow-lg overflow-hidden m-1 border border-muted-foreground">
        <img src={metadata.image} />
      </div>
      <h1 className="text-sm text-center text-muted-foreground">
        {metadata.name.slice(0, 15)}
      </h1>
    </div>
  );
};
