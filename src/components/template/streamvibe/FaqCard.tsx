type Props = {
  number: string;
  title: string;
  hint: string;
};

export default function FaqCard({ number, title, hint }: Props) {
  return (
    <div className="inline-flex items-start justify-start gap-4 self-stretch p-6">
      <div className="size- inline-flex flex-col items-start justify-start gap-2.5 rounded-lg bg-stone-900 p-4 outline -outline-offset-1 outline-neutral-800">
        <div className="justify-start font-['Manrope'] text-base font-semibold text-white">
          {number}
        </div>
      </div>
      <div className="inline-flex flex-1 flex-col items-start justify-start gap-3.5 self-stretch">
        <div className="justify-start self-stretch font-['Manrope'] text-xl leading-8 font-medium text-white">
          {title}
        </div>
        <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
          {hint}
        </div>
      </div>
      <div className="relative size-6 overflow-hidden">
        <div className="absolute top-[11px] left-1 h-2.5 w-4 bg-white" />
      </div>
    </div>
  );
}
