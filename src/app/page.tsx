"use client";
import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const { login, logout, authenticated } = usePrivy();
  return (
    <div className="flex justify-center items-center h-screen">
      {authenticated ? (
        <Button variant="destructive" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button onClick={login}>Login</Button>
      )}
    </div>
  );
}
