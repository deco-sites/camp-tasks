import Icons from "deco-sites/camp-tasks/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";
import { invoke } from "deco-sites/camp-tasks/runtime.ts";

export interface Props {
  productId: string;
}

export default function Votes({ productId }: Props) {
  const vote = useSignal(false);
  const voteQtd = useSignal("0");

  function handleClick() {
    invoke["deco-sites/camp-tasks"].actions
      .PostVotesProduct({ productId })
      .then(({ product, total }) => {
        voteQtd.value = String(product);
        vote.value = !vote.value;
      });
  }

  invoke["deco-sites/camp-tasks"].loaders
    .countvotesproduct({ productId })
    .then(({ product }) => {
      voteQtd.value = product;
    });

  return (
    <div className="flex gap-2 p-3">
      <button onClick={handleClick} disabled={vote.value}>
        {vote.value
          ? <Icons id="MoodCheck" size={32} />
          : <Icons id="MoodSmile" size={32} />}
      </button>
      <span>{voteQtd}</span>
    </div>
  );
}
