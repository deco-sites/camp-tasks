export interface Result {
  product: string;
}

export interface Props {
  productId: string;
}

export default async function countVotesProduct(
  { productId }: Props,
): Promise<Result> {
  const res = await fetch(`https://camp-api.deco.cx/event/${productId}`, {
    method: "GET",
    headers: {
      "x-api-key": "camp-tasks",
    },
  });
  const data = await res.json();

  return data;
}
