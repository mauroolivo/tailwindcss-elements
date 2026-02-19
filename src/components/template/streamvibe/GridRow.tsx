import Image from "next/image";

interface GridRowProps {
  images: string[]; // expect up to 9 image paths (public/ or remote)
}

export default function GridRow({ images }: GridRowProps) {
  const imgs = images.slice(0, 9);
  // pad with empty strings if fewer than 9 provided
  while (imgs.length < 9) imgs.push("");

  function getPath(src: string) {
    if (!src) return "/template/streamvibe/grid/1_2.svg";
    return `/template/streamvibe/grid/${src}.svg`;
  }
  return (
    <div className="inline-flex h-48 items-start justify-start gap-2.5 self-stretch">
      {imgs.map((src, i) => (
        <Image
          key={i}
          className="flex-1 self-stretch rounded-xl"
          src={getPath(src)}
          alt={`grid-${i + 1}`}
          width={151}
          height={200}
        />
      ))}
    </div>
  );
}
