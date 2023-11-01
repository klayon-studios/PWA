"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { SmartAccountProvider } from "@/hooks/SmartAccountContext";
import { createPublicClient, http } from "viem";
import { baseGoerli } from "viem/chains";
import { env } from "../../../env.mjs";

export const publicClient = createPublicClient({
  chain: baseGoerli,
  transport: http(),
});

const Providers = ({ children }: { children: React.ReactNode }) => {
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
    >
      <SmartAccountProvider>{children}</SmartAccountProvider>
    </PrivyProvider>
  );
};

export default Providers;
