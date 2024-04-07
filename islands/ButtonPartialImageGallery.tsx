import Image from "apps/website/components/Image.tsx";
import type { Props } from "deco-sites/camp-tasks/sections/Images/PartialImageGallery.tsx";
import { useSignal } from "@preact/signals";

export default function PartialImageGalleryBtn({ images }: Props) {
  const count = useSignal(3);

  function handleClick() {
    count.value += 3;
  }

  return (
    <div className="my-16">
      <ul className="grid sm:grid-cols-3 grid-cols-1 gap-2">
        {images &&
          images
            .slice(0, count.value)
            .map((image, index) => (
              <li className="flex" key={index}>
                <Image
                  src={image}
                  width={300}
                  height={300}
                  className="min-w-full"
                />
              </li>
            ))}
      </ul>

      {images.length > count.value && (
        <div className="flex justify-center w-auto mt-3">
          <button className="btn btn-primary" onClick={handleClick}>
            Mostrar mais
          </button>
        </div>
      )}
    </div>
  );
}
