export default function PlansSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-start gap-10 pt-16 lg:gap-14">
      <div className="flex w-full flex-col items-start justify-start gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex w-full max-w-4xl flex-col items-start justify-start gap-2.5">
          <h2 className="justify-start self-stretch font-['Manrope'] text-3xl leading-10 font-bold text-white">
            Choose the plan that&apos;s right for you
          </h2>
          <p className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="inline-flex items-center justify-start self-start rounded-lg bg-stone-950 p-2 outline -outline-offset-1 outline-neutral-800 lg:self-auto">
          <div className="flex items-center justify-center gap-2.5 rounded-md bg-stone-900 px-5 py-3">
            <div className="justify-start font-['Manrope'] text-sm leading-5 font-medium text-white">
              Monthly
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 rounded-[100px] px-5 py-3">
            <div className="justify-start font-['Manrope'] text-sm leading-5 font-medium text-neutral-400">
              Yearly
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col items-start justify-start gap-8 rounded-[10px] bg-zinc-900 p-6 outline -outline-offset-1 outline-neutral-800 lg:gap-10 lg:p-10">
          <div className="flex min-h-42 flex-col items-start justify-start gap-3 self-stretch lg:min-h-44">
            <div className="justify-start self-stretch font-['Manrope'] text-xl leading-8 font-bold text-white">
              Basic Plan
            </div>
            <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </div>
          </div>
          <div className="inline-flex items-end justify-center gap-0.5">
            <div className="justify-start font-['Manrope'] text-4xl leading-10 font-semibold text-white lg:text-5xl lg:leading-[73px]">
              $9.99
            </div>
            <div className="mb-1 justify-start font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
              /month
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-3 self-stretch sm:flex-row">
            <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-neutral-900 px-5 py-3.5 outline -outline-offset-1 outline-neutral-800">
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-semibold text-white">
                Start Free Trial
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-red-600 px-5 py-3.5">
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-semibold text-white">
                Choose Plan
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8 rounded-[10px] bg-zinc-900 p-6 outline -outline-offset-1 outline-neutral-800 lg:gap-10 lg:p-10">
          <div className="flex min-h-42 flex-col items-start justify-start gap-3 self-stretch lg:min-h-44">
            <div className="justify-start self-stretch font-['Manrope'] text-xl leading-8 font-bold text-white">
              Standard Plan
            </div>
            <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content
            </div>
          </div>
          <div className="inline-flex items-end justify-center gap-0.5">
            <div className="justify-start font-['Manrope'] text-4xl leading-10 font-semibold text-white lg:text-5xl lg:leading-[73px]">
              $12.99
            </div>
            <div className="mb-1 justify-start font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
              /month
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-3 self-stretch sm:flex-row">
            <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-neutral-900 px-5 py-3.5 outline -outline-offset-1 outline-neutral-800">
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-semibold text-white">
                Start Free Trial
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-red-600 px-5 py-3.5">
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-semibold text-white">
                Choose Plan
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8 rounded-[10px] bg-zinc-900 p-6 outline -outline-offset-1 outline-neutral-800 lg:gap-10 lg:p-10 md:col-span-2 xl:col-span-1">
          <div className="flex min-h-42 flex-col items-start justify-start gap-3 self-stretch lg:min-h-44">
            <div className="justify-start self-stretch font-['Manrope'] text-xl leading-8 font-bold text-white">
              Premium Plan
            </div>
            <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
              Access to a widest selection of movies and shows, including all
              new releases and Offline Viewing
            </div>
          </div>
          <div className="inline-flex items-end justify-center gap-0.5">
            <div className="justify-start font-['Manrope'] text-4xl leading-10 font-semibold text-white lg:text-5xl lg:leading-[73px]">
              $14.99
            </div>
            <div className="mb-1 justify-start font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
              /month
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-3 self-stretch sm:flex-row">
            <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-neutral-900 px-5 py-3.5 outline -outline-offset-1 outline-neutral-800">
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-semibold text-white">
                Start Free Trial
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-red-600 px-5 py-3.5">
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-semibold text-white">
                Choose Plan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
