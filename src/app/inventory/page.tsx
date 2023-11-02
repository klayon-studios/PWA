"use client";

import { getNFTsForAddress } from "@/lib/Alchemy";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useSmartAccount } from "@/hooks/SmartAccountContext";
import { useEffect, useState } from "react";
import { Icons } from "@/components/icons";

type NFTRes = {
  ownedNfts: any[];
  totalCount: number;
  blockHash: string;
};

export default function Inventory() {
  const { ready, authenticated } = usePrivy();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // const { smartAccountAddress } = useSmartAccount();
  const smartAccountAddress = "0x3A80BbB1d2fa5411E6129771d78e31d702C462e4";
  const [nfts, setNfts] = useState<NFTRes | null>();
  useEffect(() => {
    if (smartAccountAddress) {
      setIsLoading(true);
      const getNfts = async () => {
        const data = await getNFTsForAddress(smartAccountAddress);
        setNfts(data);
        setIsLoading(false);
      };
      getNfts();
    }
  }, []);

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  const getStatus = () => {
    if (!isLoading && nfts && nfts?.totalCount > 0) {
      return "hasItems";
    } else if (isLoading) {
      return "loading";
    } else {
      return "noItems";
    }
  };

  const status = getStatus();

  const ActiveViews = {
    loading: (
      <div className="border-2 border-dashed w-full h-3/4 rounded-lg justify-center flex items-center text-muted-foreground">
        <Icons.spinner className="animate-spin" />
      </div>
    ),
    hasItems: (
      <div className="grid grid-cols-3 p-2 w-full gap-2">
        {nfts?.ownedNfts.map((nft, i) => (
          <Item key={i} metadata={nft.metadata} />
        ))}
      </div>
    ),
    noItems: (
      <div className="border-2 border-dashed w-full h-3/4 rounded-lg justify-center flex items-center text-muted-foreground">
        No items found
      </div>
    ),
  };

  const CurrentView = ActiveViews[status];

  return (
    <div className="pt-20 px-8 h-screen">
      <h1 className="text-3xl font-bold pt-4 pb-6">Inventory</h1>
      {CurrentView}
    </div>
  );
}

const Item = ({ metadata }: any) => {
  return (
    <div>
      <div className="rounded-lg shadow-lg overflow-hidden border border-muted-foreground">
        <img src={metadata.image} />
      </div>
      <h1 className="text-sm text-center text-muted-foreground">
        {`${metadata.name.slice(0, 11)}...`}
      </h1>
    </div>
  );
};
