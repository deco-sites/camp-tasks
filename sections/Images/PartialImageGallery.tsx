import { ImageWidget } from "apps/admin/widgets.ts";
import PartialImageGalleryBtn from "../../islands/ButtonPartialImageGallery.tsx";

export interface Props {
  images: ImageWidget[];
}

export default function PartialImageGallery({ images }: Props) {
  if (!images || !images.length) {
    images = [];
  }

  images = images.filter((i) => typeof i === "string");

  if (images && images.length < 3) {
    const placeholders = 3 - images.length;
    for (let i = 0; i < placeholders; i++) {
      images.push("https://fakeimg.pl/300x300");
    }
  }

  return (
    <div className="container">
      <PartialImageGalleryBtn images={images} />
    </div>
  );
}
