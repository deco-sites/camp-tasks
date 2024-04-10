import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  campaign: string;
}

export default function Utm({ campaign }: Props, ctx: MatchContext) {
  const url = new URL(ctx.request.url);
  const param =
    new URLSearchParams(url.search).get("utmCampaign")?.includes(campaign) ??
      false;

  return param;
}
