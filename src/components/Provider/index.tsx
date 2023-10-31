"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { createPublicClient, http } from "viem";
import { baseGoerli } from "viem/chains";
import { env } from "../../../env.mjs";

export const publicClient = createPublicClient({
  chain: baseGoerli,
  transport: http(),
});

const handleLogin = (user: { id: string }) => {
  console.log(`User ${user.id} logged in!`);
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivyProvider appId={env.NEXT_PUBLIC_PRIVY_APP_ID} onSuccess={handleLogin}>
      {children}
    </PrivyProvider>
  );
};

export default Providers;
