import React from "react";
import FaqCard from "@/components/template/streamvibe/FaqCard";
import { faq_items } from "@/data/streamvibe-model";
export default function FaqSection() {
  return (
    <div className="pt-16 flex max-w-[1440px] mx-auto flex-col items-center justify-start gap-14">
      <div className="inline-flex items-end justify-start gap-20 self-stretch">
        <div className="inline-flex flex-1 flex-col items-start justify-start gap-2.5">
          <div className="justify-start self-stretch font-['Manrope'] text-3xl leading-10 font-bold text-white">
            Frequently Asked Questions
          </div>
          <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
            Got questions? We&apos;ve got answers! Check out our FAQ section to
            find answers to the most common questions about StreamVibe.
          </div>
        </div>
        <div className="size- flex items-start justify-start gap-2.5 rounded-md bg-red-600 px-5 py-3.5">
          <div className="justify-start font-['Manrope'] text-sm leading-5 font-semibold text-white">
            Ask a Question
          </div>
        </div>
      </div>
      <div className="inline-flex items-start justify-start gap-10 self-stretch">
        <div className="inline-flex flex-1 flex-col items-start justify-start">
          {faq_items.slice(0, 4).map((item, i) => (
            <React.Fragment key={item.order ?? i}>
              <FaqCard
                order={item.order}
                title={item.question}
                hint={item.answer}
              />
              {i !== 3 && <div className="sv-faq-gradient h-px self-stretch" />}
            </React.Fragment>
          ))}
        </div>
        <div className="inline-flex flex-1 flex-col items-start justify-start">
          {faq_items.slice(4, 8).map((item, i) => (
            <React.Fragment key={item.order ?? i + 4}>
              <FaqCard
                order={item.order}
                title={item.question}
                hint={item.answer}
              />
              {i !== 3 && <div className="sv-faq-gradient h-px self-stretch" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
