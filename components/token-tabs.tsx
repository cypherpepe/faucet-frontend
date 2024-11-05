import Image from "next/image";
import { Denomination, FaucetStatsResponse } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ethLogo from "@/public/assets/ethereum.svg";
import usdcLogo from "@/public/assets/usdc.svg";
import usdtLogo from "@/public/assets/usdt.svg";
import { ENV } from "@/lib/constants";

interface TokenTabsProps {
  denomination: Denomination;
  setDenomination: (denomination: Denomination) => void;
  faucetStats?: FaucetStatsResponse;
  claimInProgress: boolean;
}
const TokenTabs = ({
  denomination,
  setDenomination,
  faucetStats,
  claimInProgress,
}: TokenTabsProps) => {
  return (
    <Tabs defaultValue={denomination} className="-mt-14">
      <TabsList className="py-7 space-x-10">
        <TabsTrigger
          value="eth"
          className="space-x-2"
          onClick={() => setDenomination("eth")}
          disabled={claimInProgress}
        >
          <Image src={ethLogo} width={24} height={24} alt="ETH" />
          <span>ETH</span>
        </TabsTrigger>
        <TabsTrigger
          value="usdc"
          className="space-x-2"
          onClick={() => setDenomination("usdc")}
          disabled={claimInProgress}
        >
          <Image src={usdcLogo} width={24} height={24} alt="USDC" />
          <span>USDC</span>
        </TabsTrigger>
        <TabsTrigger
          value="usdt"
          className="space-x-2"
          onClick={() => setDenomination("usdt")}
          disabled={claimInProgress}
        >
          <Image src={usdtLogo} width={24} height={24} alt="USDT" />
          <span>USDT</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="eth">
        <h2 className="mt-10 text-5xl md:text-7xl leading-tight text-[#878794] font-medium">
          {ENV.NEXT_PUBLIC_DRIP_AMOUNT_ETH} ETH
        </h2>
      </TabsContent>
      <TabsContent value="usdc">
        <h2 className="mt-10 text-5xl md:text-7xl leading-tight text-[#878794] font-medium">
          1.0 USDC
        </h2>
      </TabsContent>
      <TabsContent value="usdt">
        <h2 className="mt-10 text-5xl md:text-7xl leading-tight text-[#878794] font-medium">
          1.0 USDT
        </h2>
      </TabsContent>
    </Tabs>
  );
};

export { TokenTabs };
