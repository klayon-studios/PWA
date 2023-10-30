"use client";

import { PrivyProvider } from "@privy-io/react-auth";

import { env } from "../../../env.mjs";

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
