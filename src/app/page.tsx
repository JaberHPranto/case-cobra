/* eslint-disable @next/next/no-img-element */
import MaxWidth from "@/components/shared/MaxWidth";
import Image from "next/image";
import { Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <MaxWidth className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
              {/* A linear gradient for visual representation */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
              <Image
                src="/snake-1.png"
                alt="hero-image"
                height={0}
                width={0}
                sizes="100vw"
                className="w-full"
              />
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Your Image on a{" "}
              <span className="bg-green-600 px-2 text-white">Custom</span> Phone
              Case
            </h1>
            <p className="mt-8 text-lg text-center text-balance max-w-prose lg:text-left lg:pr-10">
              Capture your favorite memories with your own,{" "}
              <span className="font-semibold">one-of-one</span> phone case.
              CaseCobra allows you to protect your memories, not just your phone
              case.
            </p>

            <ul className="mt-8 space-y-2 flex items-center sm:items-start text-left font-medium">
              <div className="space-y-2">
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="size-5 shrink-0 text-green-600" />
                  High-quality, durable material
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="size-5 shrink-0 text-green-600" />5 year
                  print guarantee
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="size-5 shrink-0 text-green-600" />
                  Modern iPhone models supported
                </li>
              </div>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex -space-x-3">
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-slate-200"
                  src="/users/user-1.png"
                  alt="user image"
                />
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-slate-200"
                  src="/users/user-2.png"
                  alt="user image"
                />
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-slate-200"
                  src="/users/user-3.png"
                  alt="user image"
                />
                <img
                  className="inline-block size-10 object-cover rounded-full ring-2 ring-slate-200"
                  src="/users/user-5.jpg"
                  alt="user image"
                />
                <img
                  className="inline-block size-10 rounded-full ring-2 ring-slate-200"
                  src="/users/user-4.jpg"
                  alt="user image"
                />
              </div>
              <div className="flex flex-col items-center justify-between sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="size-4 text-green-600 fill-green-600" />
                  <Star className="size-4 text-green-600 fill-green-600" />
                  <Star className="size-4 text-green-600 fill-green-600" />
                  <Star className="size-4 text-green-600 fill-green-600" />
                  <Star className="size-4 text-green-600 fill-green-600" />
                </div>
                <p>
                  <span className="font-semibold">1.2450</span> happy customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
}
