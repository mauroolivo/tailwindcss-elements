import Image from "next/image";

interface ServiceCardProps {
  icon_name: string;
  title: string;
  hint: string;
}

export default function ServiceCard({
  icon_name,
  title,
  hint,
}: ServiceCardProps) {
  return (
    <div className="to 81% inline-flex flex-1 flex-col items-start justify-start gap-6 rounded-[10px] bg-black bg-linear-220 from-red-600/10 to-red-600/0 p-10 outline -outline-offset-1 outline-neutral-800">
      <div className="inline-flex items-center justify-start gap-3 self-stretch">
        <div className="size- flex items-start justify-start gap-2.5 rounded-[10px] bg-neutral-900 p-3 outline -outline-offset-1 outline-stone-900">
          <div className="relative size-7 overflow-hidden">
            <Image
              src={`/template/streamvibe/icons/service/${icon_name}.svg`}
              alt={`${title} icon`}
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex-1 justify-start font-['Manrope'] text-xl leading-8 font-semibold text-white">
          {title}
        </div>
      </div>
      <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
        {hint}
      </div>
    </div>
  );
}
