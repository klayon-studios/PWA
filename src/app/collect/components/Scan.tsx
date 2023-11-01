"use client";
import { Dispatch, SetStateAction } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { hashMessageEIP191SolidityKeccak } from "@/lib/crypto";
import { useSmartAccount } from "@/hooks/SmartAccountContext";
import { publicClient } from "@/components/Provider";
//@ts-ignore
import { execHaloCmdWeb } from "@arx-research/libhalo/api/web.js";

type ScanProps = {
  handleNextStep: () => void;
  //useState setter types
  setStatusText: Dispatch<SetStateAction<string>>;
  setChipSig: Dispatch<SetStateAction<string>>;
  setSignBlock: Dispatch<SetStateAction<bigint>>;
};

const Scan = ({ handleNextStep, setStatusText, setChipSig, setSignBlock }: ScanProps) => {
  const { smartAccountAddress } = useSmartAccount();

  const handleScan = async () => {
    //the scan function is disabled if the smart account is not set
    if (!smartAccountAddress) return;
    const recentBlock = await publicClient.getBlockNumber();
    const blockHash = (await publicClient.getBlock({ blockNumber: recentBlock })).hash;
    const msg = hashMessageEIP191SolidityKeccak(smartAccountAddress, blockHash);
    if (msg) {
      let command = {
        name: "sign",
        keyNo: 1,
        message: msg.slice(2),
      };

      let res;

      try {
        // --- request NFC command execution ---
        res = await execHaloCmdWeb(command, {
          statusCallback: (cause: any) => {
            if (cause === "init") {
              setStatusText("Please tap the tag to the back of your smartphone and hold it...");
            } else if (cause === "retry") {
              setStatusText("Something went wrong, please try to tap the tag again...");
            } else if (cause === "scanned") {
              setStatusText("Tag scanned successfully, post-processing the result...");
            } else {
              setStatusText(cause);
            }
          },
        });
        // the command has succeeded, display the result to the user
        if (res && res.signature.ether) {
          setSignBlock(recentBlock);
          setStatusText("success");
          setChipSig(res.signature.ether);
        } else {
          setStatusText("error signature missing");
        }
      } catch (e) {
        // the command has failed, display error to the user
        setStatusText("Scanning failed, click on the button again to retry. Details: " + String(e));
      }
    } else {
      setStatusText("error msg missing");
    }
    handleNextStep();
  };

  return (
    <>
      <div className='rounded-full w-48 h-48 border-2 justify-center items-center flex'>
        <Icons.scan className='w-24 h-24' />
      </div>
      <div className='w-full'>
        {/* <pre
          style={{
            fontSize: 12,
            textAlign: "left",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
          >
          //debug sectoion
          {statusText}
        </pre> */}
        <h1 className='text-3xl text-left w-full font-bold'>Scan Chip</h1>
        <p className='text-left w-full mt-2'>Scan your chip to get started</p>
        <Button className='w-full mt-8' size='lg' onClick={handleScan}>
          Scan
        </Button>
      </div>
    </>
  );
};

export default Scan;
