import Icons from "deco-sites/camp-tasks/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";
import { invoke } from "deco-sites/camp-tasks/runtime.ts";
import { toast } from "toastify";
import { sendEvent } from "deco-sites/camp-tasks/sdk/analytics.tsx";

export interface Props {
  productId: string;
}

export default function Votes({ productId, ...props }: Props) {
  const vote = useSignal(false);
  const voteQtd = useSignal("0");

  function handleUpdate() {
    invoke["deco-sites/camp-tasks"].loaders
      .countvotesproduct({ productId })
      .then(({ product }) => {
        voteQtd.value = product;
      });
  }

  handleUpdate();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={async () => {
          await invoke["deco-sites/camp-tasks"].actions
            .PostVotesProduct({ productId })
            .then(({ product, total }) => {
              voteQtd.value = String(product);
              vote.value = !vote.value;

              const totalVotesEl = document.querySelectorAll(".total-votes");

              if (totalVotesEl && totalVotesEl.length) {
                totalVotesEl.forEach((el) => {
                  el.textContent = String(total);
                });
              }

              sendEvent({
                name: "post_score",
                params: {
                  score: total,
                },
              });

              toast("Produto avaliado!");
            });

          handleUpdate();
        }}
        disabled={vote.value}
      >
        {vote.value
          ? <Icons id="MoodCheck" size={32} />
          : <Icons id="MoodSmile" size={32} />}
      </button>
      <span>{voteQtd}</span>
    </div>
  );
}
