import ServiceCard from "@/components/template/streamvibe/ServiceCard";
import { service_cards } from "@/data/streamvibe-model";

export default function ServiceSection() {
  return (
    <div className="pt-16 w-full max-w-[1440px] mx-auto flex flex-col items-start justify-start gap-14">
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {service_cards.slice(0, 6).map((card) => (
          <div key={card.icon_name} className="w-full">
            <ServiceCard
              icon_name={card.icon_name}
              title={card.title}
              hint={card.hint}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
