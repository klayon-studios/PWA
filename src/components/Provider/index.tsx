"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { Toaster } from "@/components/ui/toaster";
import { SmartAccountProvider } from "@/hooks/SmartAccountContext";
import { createPublicClient, http } from "viem";
import { baseGoerli } from "viem/chains";
import { useRouter } from "next/navigation";
import { env } from "../../../env.mjs";

export const publicClient = createPublicClient({
  chain: baseGoerli,
  transport: http(),
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <PrivyProvider
      appId={env.NEXT_PUBLIC_PRIVY_APP_ID}
      config={{
        loginMethods: ["email", "google"],
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
          noPromptOnSignature: true,
        },
        defaultChain: baseGoerli,
      }}
      onSuccess={() => router.push("/inventory")}
    >
      <SmartAccountProvider>{children}</SmartAccountProvider>
      <Toaster />
    </PrivyProvider>
  );
};

export default Providers;
