import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black h-[100vh] w-[100vw]">
      <div className="relative h-[50vh] w-full text-white opacity-50">
        <div className="absolute inset-0 z-10">
          <img
            src="/images/homeBG.jpg"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="pop-up h-[40vh] w-[90vw] flex flex-col gap-10 justify-center items-center text-white bg-gray-950 mx-auto my-10 rounded-2xl animate-slide-up">
        <div className="heading text-3xl">
          You came to the right place, I am...
        </div>
        <div className="desc text-lg">
          <ol className="list flex flex-col gap-5">
            <li>
              &#8594; Deconstructing complex challenges to engineer simple,
              powerful, and intuitive solutions.
            </li>
            <li>
              &#8594; Passionate about creating technology that empowers users
              and shapes the future.
            </li>
            <li>
              &#8594; Transforming ideas into reality through clean code and
              user-centric design.
            </li>
          </ol>
        </div>
        <Link
          href={"/profile"}
          className="profile-btn text-lg px-3 py-1 rounded-xl bg-sky-500 border-white text-amber-50 hover:opacity-90"
        >
          Visit Profile
        </Link>
      </div>
    </div>
  );
}
