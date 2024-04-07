export interface Result {
  total: number;
  product: number;
}

export interface Props {
  productId: string;
}

export default async function PostVotesProduct(props: Props): Promise<Result> {
  const res = await fetch("https://camp-api.deco.cx/event", {
    method: "POST",
    headers: {
      "x-api-key": "camp-tasks",
    },
    body: JSON.stringify(props),
  });

  const data = await res.json();

  return data;
}
