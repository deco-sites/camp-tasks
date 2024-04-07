export interface Result {
  total: number;
}

export default async function countVotesTotal(): Promise<Result> {
  const res = await fetch(`https://camp-api.deco.cx/events`, {
    method: "GET",
    headers: {
      "x-api-key": "camp-tasks",
    },
  });
  const data = await res.json();

  return data;
}
