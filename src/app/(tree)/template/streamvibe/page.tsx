import BtnWatch from '@/components/template/streamvibe/BtnWatch';
import ExploreCard from '@/components/template/streamvibe/ExploreCard';
import GridRow from '@/components/template/streamvibe/GridRow';
import Navi from '@/components/template/streamvibe/Navi';
import Image from 'next/image';
import ServiceSection from '@/components/template/streamvibe/ServiceSection';
import FaqSection from '@/components/template/streamvibe/FaqSection';
import {
  imgs_row_1,
  imgs_row_2,
  imgs_row_3,
  imgs_row_4,
} from '@/data/streamvibe-model';
import GridRowLast from '@/components/template/streamvibe/GridRowLast';
export default function Page() {
  return (
    <div className="relative mx-auto h-[4381px] w-[1440px] overflow-hidden bg-neutral-900">
      <div className="absolute top-0 left-0 inline-flex w-[1440px] flex-col items-center justify-start">
        <div className="relative flex h-[699px] flex-col items-start justify-start gap-2.5 self-stretch overflow-hidden">
          <GridRow images={imgs_row_1} />
          <GridRow images={imgs_row_2} />
          <GridRow images={imgs_row_3} />
          <GridRowLast images={imgs_row_4} />
          <Image
            className="absolute -top-20 left-0 h-[860px] w-[1920px] rounded-xl bg-blend-overlay mix-blend-overlay"
            src="/template/streamvibe/bg_1.svg"
            alt="background"
            width={1920}
            height={860}
          />
          <div className="absolute top-0 left-0 h-[581px] w-[1440px] bg-linear-to-b from-neutral-900 to-neutral-900/0" />
          <div className="absolute top-[118px] left-0 h-[581px] w-[1440px] bg-linear-to-b from-neutral-900/0 to-neutral-900" />

          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/template/streamvibe/abstract_design.svg"
              alt="abstract design"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-10 self-stretch px-36">
          <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
            <div className="justify-start self-stretch text-center font-['Manrope'] text-5xl leading-[72px] font-bold text-white">
              The Best Streaming Experience
            </div>
            <div className="justify-start self-stretch text-center font-['Manrope'] text-sm leading-5 font-normal text-neutral-400">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </div>
          </div>
          <BtnWatch />
        </div>
      </div>
      <Navi />
      <div className="absolute top-[986px] left-[81px] inline-flex w-[1279px] flex-col items-start justify-start gap-14">
        <div className="inline-flex items-end justify-start gap-20 self-stretch">
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-2.5">
            <div className="justify-start self-stretch font-['Manrope'] text-3xl leading-10 font-bold text-white">
              Explore our wide variety of categories
            </div>
            <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
              Whether you&apos;re looking for a comedy to make you laugh, a
              drama to make you think, or a documentary to learn something new
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
      <ServiceSection />
      <FaqSection />
      <div className="absolute top-[2986px] left-[80px] inline-flex w-[1280px] flex-col items-start justify-start gap-14">
        <div className="inline-flex items-end justify-start gap-20 self-stretch">
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-2.5">
            <div className="justify-start self-stretch font-['Manrope'] text-3xl leading-10 font-bold text-white">
              Choose the plan that&apos;s right for you
            </div>
            <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </div>
          </div>
          <div className="size- flex items-center justify-start rounded-lg bg-stone-950 p-2 outline outline-1 outline-offset-[-1px] outline-neutral-800">
            <div className="size- flex items-center justify-center gap-2.5 rounded-md bg-stone-900 px-5 py-3">
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-medium text-white">
                Monthly
              </div>
            </div>
            <div className="size- flex items-center justify-center gap-2.5 rounded-[100px] px-5 py-3">
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-medium text-neutral-400">
                Yearly
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-start justify-start gap-5 self-stretch">
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-10 rounded-[10px] bg-zinc-900 p-10 outline outline-1 outline-offset-[-1px] outline-neutral-800">
            <div className="flex flex-col items-start justify-start gap-3 self-stretch">
              <div className="justify-start self-stretch font-['Manrope'] text-xl leading-8 font-bold text-white">
                Basic Plan
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
                Enjoy an extensive library of movies and shows, featuring a
                range of content, including recently released titles.
              </div>
            </div>
            <div className="size- inline-flex items-end justify-center gap-0.5">
              <div className="justify-start font-['Manrope'] text-3xl leading-5 font-semibold text-white">
                $9.99
              </div>
              <div className="justify-start font-['Manrope'] text-base leading-3 font-medium text-neutral-400">
                /month
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-3 self-stretch">
              <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-neutral-900 px-5 py-3.5 outline outline-1 outline-offset-[-1px] outline-neutral-800">
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
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-10 rounded-[10px] bg-zinc-900 p-10 outline outline-1 outline-offset-[-1px] outline-neutral-800">
            <div className="flex flex-col items-start justify-start gap-3 self-stretch">
              <div className="justify-start self-stretch font-['Manrope'] text-xl leading-8 font-bold text-white">
                Standard Plan
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </div>
            </div>
            <div className="size- inline-flex items-end justify-center gap-0.5">
              <div className="justify-start font-['Manrope'] text-3xl leading-5 font-semibold text-white">
                $12.99
              </div>
              <div className="justify-start font-['Manrope'] text-base leading-3 font-medium text-neutral-400">
                /month
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-3 self-stretch">
              <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-neutral-900 px-5 py-3.5 outline outline-1 outline-offset-[-1px] outline-neutral-800">
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
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-10 rounded-[10px] bg-zinc-900 p-10 outline outline-1 outline-offset-[-1px] outline-neutral-800">
            <div className="flex flex-col items-start justify-start gap-3 self-stretch">
              <div className="justify-start self-stretch font-['Manrope'] text-xl leading-8 font-bold text-white">
                Premium Plan
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </div>
            </div>
            <div className="size- inline-flex items-end justify-center gap-0.5">
              <div className="justify-start font-['Manrope'] text-3xl leading-5 font-semibold text-white">
                $14.99
              </div>
              <div className="justify-start font-['Manrope'] text-base leading-3 font-medium text-neutral-400">
                /month
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-3 self-stretch">
              <div className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-neutral-900 px-5 py-3.5 outline outline-1 outline-offset-[-1px] outline-neutral-800">
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
      </div>
      <div className="absolute top-[3611px] left-[80px] inline-flex w-[1280px] items-center justify-start gap-24 overflow-hidden rounded-xl bg-stone-950 px-14 py-20 outline outline-1 outline-offset-[-1px] outline-neutral-800">
        <div className="absolute top-[-60px] left-0 inline-flex h-96 w-[1281px] flex-col items-start justify-start gap-5">
          <div className="inline-flex flex-1 items-start justify-start gap-5 self-stretch">
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
          </div>
          <div className="inline-flex flex-1 items-start justify-start gap-5 self-stretch">
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
          </div>
          <div className="inline-flex flex-1 items-start justify-start gap-5 self-stretch">
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
          </div>
          <div className="inline-flex flex-1 items-start justify-start gap-5 self-stretch">
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
            <img
              className="flex-1 self-stretch"
              src="https://placehold.co/125x74"
            />
          </div>
          <div className="via 16% absolute top-[53px] left-[-2px] h-64 w-[1283px] bg-linear-0 from-stone-950 via-stone-950/95 to-red-600/0" />
        </div>
        <div className="inline-flex flex-1 flex-col items-start justify-start gap-2.5">
          <div className="justify-start self-stretch font-['Manrope'] text-3xl leading-10 font-bold text-white">
            Start your free trial today!
          </div>
          <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-normal text-neutral-400">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </div>
        </div>
        <div className="size- flex items-center justify-center gap-2.5 rounded-lg bg-red-600 px-5 py-3.5">
          <div className="justify-start font-['Manrope'] text-sm leading-5 font-semibold text-white">
            Start a Free Trail
          </div>
        </div>
      </div>
      <div className="absolute top-[3967px] left-0 inline-flex w-[1440px] flex-col items-start justify-start gap-20 bg-stone-950 px-20 pt-20 pb-10">
        <div className="inline-flex items-start justify-start gap-5 self-stretch">
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-5">
            <div className="justify-start self-stretch font-['Manrope'] text-lg leading-7 font-semibold text-white">
              Home
            </div>
            <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Categories
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Devices
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Pricing
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                FAQ
              </div>
            </div>
          </div>
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-5">
            <div className="justify-start self-stretch font-['Manrope'] text-lg leading-7 font-semibold text-white">
              Movies
            </div>
            <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Gernes
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Trending
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                New Release
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Popular
              </div>
            </div>
          </div>
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-5">
            <div className="justify-start self-stretch font-['Manrope'] text-lg leading-7 font-semibold text-white">
              Shows
            </div>
            <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Gernes
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Trending
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                New Release
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Popular
              </div>
            </div>
          </div>
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-5">
            <div className="justify-start self-stretch font-['Manrope'] text-lg leading-7 font-semibold text-white">
              Support
            </div>
            <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
              Contact Us
            </div>
          </div>
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-5">
            <div className="justify-start self-stretch font-['Manrope'] text-lg leading-7 font-semibold text-white">
              Subscription
            </div>
            <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Plans
              </div>
              <div className="justify-start self-stretch font-['Manrope'] text-base leading-6 font-medium text-neutral-400">
                Features
              </div>
            </div>
          </div>
          <div className="inline-flex flex-1 flex-col items-start justify-start gap-5">
            <div className="justify-start self-stretch font-['Manrope'] text-lg leading-7 font-semibold text-white">
              Connect With Us
            </div>
            <div className="size- inline-flex items-start justify-start gap-2.5">
              <div className="size- flex items-start justify-start gap-2.5 rounded-md bg-zinc-900 p-3 outline outline-1 outline-offset-[-1px] outline-neutral-800">
                <div className="relative size-5 overflow-hidden">
                  <div className="absolute top-0 left-0 size-5 bg-white" />
                </div>
              </div>
              <div className="size- flex items-start justify-start gap-2.5 rounded-md bg-zinc-900 p-3 outline outline-1 outline-offset-[-1px] outline-neutral-800">
                <div className="relative size-5 overflow-hidden">
                  <div className="absolute top-[1.87px] left-0 h-4 w-5 bg-white" />
                </div>
              </div>
              <div className="size- flex items-start justify-start gap-2.5 rounded-md bg-zinc-900 p-3 outline outline-1 outline-offset-[-1px] outline-neutral-800">
                <div className="relative size-5 overflow-hidden">
                  <div className="absolute top-0 left-0 size-5 bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 self-stretch">
          <div className="h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-neutral-800"></div>
          <div className="inline-flex items-center justify-between self-stretch">
            <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-neutral-400">
              @2023 streamvib, All Rights Reserved
            </div>
            <div className="size- flex items-start justify-start gap-4">
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-neutral-400">
                Terms of Use
              </div>
              <div className="w-5 origin-top-left rotate-90 self-stretch outline outline-1 outline-offset-[-0.50px] outline-neutral-800"></div>
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-neutral-400">
                Privacy Policy
              </div>
              <div className="w-5 origin-top-left rotate-90 self-stretch outline outline-1 outline-offset-[-0.50px] outline-neutral-800"></div>
              <div className="justify-start font-['Manrope'] text-sm leading-5 font-normal text-neutral-400">
                Cookie Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
