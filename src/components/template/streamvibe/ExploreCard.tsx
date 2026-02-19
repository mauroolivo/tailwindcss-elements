import Image from "next/image";

interface ExploreCardProps {
  title: string;
  images: string[]; // expect up to 4 image paths
}

export default function ExploreCard({ title, images }: ExploreCardProps) {
  const imgs = images.slice(0, 4);
  const fallback = "/template/streamvibe/grid/1_1.svg";
  while (imgs.length < 4) imgs.push(fallback);

  return (
    <div className="inline-flex flex-1 flex-col items-start justify-start rounded-[10px] bg-zinc-900 p-6 outline -outline-offset-1 outline-neutral-800">
      <div className="relative flex h-52 flex-col items-start justify-start gap-[5px] self-stretch overflow-hidden">
        <div className="inline-flex flex-1 items-start justify-start gap-[5px] self-stretch">
          <Image
            className="flex-1 self-stretch rounded-md"
            src={imgs[0]}
            alt={`${title}-1`}
            width={93}
            height={103}
          />
          <Image
            className="flex-1 self-stretch rounded-md"
            src={imgs[1]}
            alt={`${title}-2`}
            width={93}
            height={103}
          />
        </div>
        <div className="inline-flex flex-1 items-start justify-start gap-[5px] self-stretch">
          <Image
            className="flex-1 self-stretch rounded-md"
            src={imgs[2]}
            alt={`${title}-3`}
            width={93}
            height={103}
          />
          <Image
            className="flex-1 self-stretch rounded-md"
            src={imgs[3]}
            alt={`${title}-4`}
            width={93}
            height={103}
          />
        </div>
        <div className="absolute top-0 -left-px h-52 w-48 bg-linear-to-b from-zinc-900/0 to-zinc-900" />
      </div>
      <div className="inline-flex items-center justify-start self-stretch">
        <div className="flex-1 justify-start font-['Manrope'] text-base leading-6 font-semibold text-white">
          {title}
        </div>
        <button
          aria-label="open"
          className="relative size-6 overflow-hidden"
          type="button"
        >
          <Image
            src="/template/streamvibe/icons/arrow_right.svg"
            alt="arrow right"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
