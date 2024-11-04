import { useMutation } from "@tanstack/react-query";
import { API } from "@/lib/api";
import { Denomination } from "@/lib/types";

interface ClaimFundsParams {
  walletAddress: string;
  captchaCode: string;
  denomination?: Denomination;
  isSpiritClaim?: boolean;
}

const useClaimFunds = () => {
  return useMutation({
    mutationKey: ["claimFunds"],
    mutationFn: (params: ClaimFundsParams) =>
      API.faucet.claimFunds(params.walletAddress, params.captchaCode, params.denomination, params.isSpiritClaim),
  });
};

export { useClaimFunds };
