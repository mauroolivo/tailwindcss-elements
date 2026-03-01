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
    <div
      className="relative inline-flex flex-1 flex-col items-start justify-start gap-6 overflow-hidden rounded-[10px] bg-neutral-950 p-10 outline -outline-offset-1 outline-neutral-800"
      style={{
        backgroundImage:
          "radial-gradient(92% 92% at 100% 0%, rgba(220, 38, 38, 0.18) 0%, rgba(220, 38, 38, 0.10) 24%, rgba(220, 38, 38, 0.035) 40%, rgba(220, 38, 38, 0) 56%), linear-gradient(180deg, rgba(9, 9, 9, 1) 0%, rgba(7, 7, 7, 1) 100%)",
      }}
    >
      <div className="relative z-10 inline-flex items-center justify-start gap-3 self-stretch">
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
      <div className="relative z-10 justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
        {hint}
      </div>
    </div>
  );
}
