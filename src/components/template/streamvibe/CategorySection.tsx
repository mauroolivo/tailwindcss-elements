import Image from "next/image";
import ExploreCard from "@/components/template/streamvibe/ExploreCard";

export default function CategorySection() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-start justify-start gap-14">
      <div className="inline-flex items-end justify-start gap-20 self-stretch">
        <div className="inline-flex flex-1 flex-col items-start justify-start gap-2.5">
          <div className="justify-start self-stretch font-['Manrope'] text-3xl leading-10 font-bold text-white">
            Explore our wide variety of categories
          </div>
          <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
            Whether you&apos;re looking for a comedy to make you laugh, a drama
            to make you think, or a documentary to learn something new
          </div>
        </div>
        <div className="size- flex items-center justify-start gap-3 rounded-[10px] bg-stone-950 p-3 outline -outline-offset-1 outline-stone-900">
          <div className="size- flex items-start justify-start gap-2.5 rounded-md bg-zinc-900 p-2.5 outline -outline-offset-1 outline-stone-900">
            <div className="relative size-6 overflow-hidden">
              <Image
                src="/template/streamvibe/icons/arrow_left.svg"
                alt="arrow left"
                width={24}
                height={24}
                className=""
              />
            </div>
          </div>
          <div className="flex w-16 items-start justify-start gap-[3px]">
            <div className="h-1 w-4 rounded-[100px] bg-red-600" />
            <div className="h-1 flex-1 rounded-[100px] bg-zinc-800" />
            <div className="h-1 flex-1 rounded-[100px] bg-zinc-800" />
            <div className="h-1 flex-1 rounded-[100px] bg-zinc-800" />
          </div>
          <div className="size- flex items-start justify-start gap-2.5 rounded-md bg-zinc-900 p-2.5 outline -outline-offset-1 outline-stone-900">
            <div className="relative size-6 overflow-hidden">
              <Image
                src="/template/streamvibe/icons/arrow_right.svg"
                alt="arrow right"
                width={24}
                height={24}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-start justify-start gap-5 self-stretch">
        <ExploreCard title="Action" images={[]} />
        <ExploreCard title="Adventure" images={[]} />
        <ExploreCard title="Comedy" images={[]} />
        <ExploreCard title="Drama" images={[]} />
        <ExploreCard title="Horror" images={[]} />
      </div>
    </div>
  );
}
