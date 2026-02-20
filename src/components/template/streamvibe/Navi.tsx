import Image from "next/image";

export default function Navi() {
  return (
    <div className="absolute top-0 left-px inline-flex w-[1439px] items-center justify-between px-20 py-6">
      <div className="relative h-12 w-40">
        <Image
          src="/template/streamvibe/logo.svg"
          alt="StreamVibe logo"
          width={160}
          height={48}
          className="object-contain"
        />
      </div>
      <div className="size- flex items-center justify-start gap-3.5">
        <div className="relative size-6 overflow-hidden">
          <div className="absolute top-[3px] left-[3px] size-4 outline outline-offset-[-0.75px] outline-white" />
        </div>
        <div className="relative size-6 overflow-hidden">
          <div className="absolute top-[3px] left-[3.69px] size-4 outline outline-offset-[-0.75px] outline-white" />
        </div>
      </div>
      <div className="size- absolute top-[18px] left-[514px] flex items-center justify-start gap-4 overflow-hidden rounded-[10px] bg-stone-950 py-2 pr-7 pl-2 outline outline-stone-900">
        <div className="size- flex items-center justify-start gap-2.5 rounded-lg bg-zinc-900 px-5 py-3 outline -outline-offset-1 outline-zinc-900">
          <div className="justify-start font-['Manrope'] text-sm leading-5 font-medium text-white">
            Home
          </div>
        </div>
        <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-stone-300">
          Movies &amp; Shows
        </div>
        <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-stone-300">
          Support
        </div>
        <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-stone-300">
          Subscriptions
        </div>
      </div>
    </div>
  );
}
