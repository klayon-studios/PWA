import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BASE_GOERLI_SCAN_URL } from "@/config/constants";
type FinishedProps = {
  txHash: string;
};
const Finished = ({ txHash }: FinishedProps) => {
  const router = useRouter();
  const handleFinished = () => {
    router.push("/inventory");
  };
  return (
    <>
      <div className='rounded-full w-48 h-48 border-2 justify-center items-center flex'>
        <Icons.check className='w-24 h-24' />
      </div>
      <div className='w-full'>
        <h1 className='text-3xl text-left w-full font-bold'>Finished</h1>
        <p className='text-left w-full mt-2'>You have collected the item</p>
        <Button variant='link' className='px-0'>
          <Link
            className='flex items-center text-accent'
            target='_blank'
            href={`${BASE_GOERLI_SCAN_URL}/tx/${txHash}`}
          >
            More details
            <Icons.externalLink className='w-3 ml-1' />
          </Link>
        </Button>
        <Button className='w-full mt-8' size='lg' onClick={handleFinished}>
          View in Inventory
        </Button>
      </div>
    </>
  );
};

export default Finished;
