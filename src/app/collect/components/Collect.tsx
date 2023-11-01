"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { encodeFunctionData, parseAbi } from "viem";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useSmartAccount } from "@/hooks/SmartAccountContext";
import { formatAsHex } from "@/lib/user-operations";
import { useToast } from "@/components/ui/use-toast";
import { KPBT_NFT_ADDRESS } from "@/config/constants";

type ScanProps = {
  setTxHash: Dispatch<SetStateAction<string>>;
  handleNextStep: () => void;
  chipSig: string;
  signBlock: bigint;
};

const Collect = ({ handleNextStep, chipSig, signBlock, setTxHash }: ScanProps) => {
  const { sendSponsoredUserOperation, smartAccountProvider, smartAccountAddress } =
    useSmartAccount();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const handleCollect = async () => {
    if (!smartAccountProvider || !smartAccountAddress) return;
    setLoading(true);
    try {
      // From a viem `RpcTransactionRequest` (e.g. calling an ERC-721's `mint` method),
      // build and send a user operation. Gas fees will be sponsored by the Base Paymaster.
      const signature = formatAsHex(chipSig);
      if (!signature) {
        throw new Error("No signature found");
      }
      const userOpHash = await sendSponsoredUserOperation({
        from: smartAccountAddress,
        to: KPBT_NFT_ADDRESS,
        data: encodeFunctionData({
          abi: parseAbi([
            "function mintPbt(bytes calldata signatureFromChip, uint256 blockNumberUsedInSig) external",
          ]),
          functionName: "mintPbt",
          args: [signature, signBlock],
        }),
      });

      // Once we have a hash for the user operation, watch it until the transaction has
      // been confirmed.
      const transactionHash = await smartAccountProvider.waitForUserOperationTransaction(
        userOpHash
      );
      setTxHash(transactionHash);
    } catch (error) {
      console.error("Mint failed with error: ", error);
      toast({
        title: "Failed to collect",
        description:
          "There was an error sending your transaction. See the developer console for more info.",
        variant: "destructive",
      });
    }
    setLoading(false);
    handleNextStep();
  };
  return (
    <>
      <div className='rounded-full w-48 h-48 border-2 justify-center items-center flex'>
        {loading ? (
          <Icons.loader className='w-24 h-24 animate-spin text-accent' />
        ) : (
          <Icons.collect className='w-24 h-24' />
        )}
      </div>
      <div className='w-full'>
        <h1 className='text-3xl text-left w-full font-bold'>Collect</h1>
        <p className='text-left w-full mt-2'>Collect your item</p>
        <Button className='w-full mt-8' size='lg' onClick={handleCollect} disabled={loading}>
          {loading ? "Please wait..." : "Collect"}
        </Button>
      </div>
    </>
  );
};

export default Collect;
