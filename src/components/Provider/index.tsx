"use client";

import { PrivyProvider } from "@privy-io/react-auth";

import { env } from "../../../env.mjs";

const handleLogin = (user: { id: string }) => {
  console.log(`User ${user.id} logged in!`);
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivyProvider
      appId={env.NEXT_PUBLIC_PRIVY_APP_ID}
      onSuccess={handleLogin}
      config={{
        loginMethods: ["email", "wallet", "twitter", "google"],
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://your-logo-url",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
};

export default Providers;
