import ServiceCard from "@/components/template/streamvibe/ServiceCard";
import { service_cards } from "@/data/streamvibe-model";

export default function ServiceSection() {
  return (
    <div className="absolute top-[1524px] left-[81px] inline-flex w-[1279px] flex-col items-start justify-start gap-14">
      <div className="flex flex-col items-start justify-start gap-2.5 self-stretch pr-36">
        <div className="justify-start self-stretch font-['Manrope'] text-3xl leading-10 font-bold text-white">
          We Provide you streaming experience across various devices.
        </div>
        <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-5 self-stretch">
        <div className="inline-flex items-start justify-start gap-5 self-stretch">
          {service_cards.slice(0, 3).map((card) => (
            <ServiceCard
              key={card.icon_name}
              icon_name={card.icon_name}
              title={card.title}
              hint={card.hint}
            />
          ))}
        </div>
        <div className="inline-flex items-start justify-start gap-5 self-stretch">
          {service_cards.slice(3, 6).map((card) => (
            <ServiceCard
              key={card.icon_name}
              icon_name={card.icon_name}
              title={card.title}
              hint={card.hint}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
