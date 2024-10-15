"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useFaucet } from "@/hooks/useFaucet";
import { ConnectWallet } from "@/components/connect-wallet";
import { useIsEligible } from "@/queries/useIsEligible";
import { KakarotOG } from "@/components/kakarot-og";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SkeletonLoading } from "@/components/skeleton-loading";

export default function Home() {
  const { wallet, activeWallets, isFaucetLoading } = useFaucet();
  const { data: isEligible, isLoading: isEligibleLoading } = useIsEligible(wallet?.address ?? "");
  const queryClient = useQueryClient();

  const isToggledOff = localStorage.getItem(`toggleEligibility/${wallet?.address}`) === "false";
  const isEligibleCheck = isToggledOff ? false : isEligible?.isEligible;

  useEffect(() => {
    if (isEligibleCheck && isEligible) {
      queryClient.setQueryData(["isEligible", wallet?.address], isEligible.proof);
    } else if (isToggledOff) {
      queryClient.setQueryData(["isEligible", wallet?.address], false);
    }
  }, [isEligible, wallet?.address, queryClient]);

  if (isEligibleLoading || isFaucetLoading) return <SkeletonLoading />;
  // if (wallet && activeWallets && !isEligible?.isEligible) redirect("/faucet");
  if (isEligibleCheck) return <KakarotOG />;

  return (
    <main className="flex flex-col items-center text-center my-20 h-full">
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-[52px]">Get free testnet Kakarot ETH</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-foreground mb-14">
        The fast, native faucet to kickstart your journey in the Kakarot ecosystem.
      </p>
      {wallet && activeWallets ? (
        <Link href={"/faucet"} className="w-full max-w-[400px]">
          <Button variant="main" className="mt-6 w-full">
            Go to Faucet
          </Button>
        </Link>
      ) : (
        <ConnectWallet />
      )}
    </main>
  );
}
