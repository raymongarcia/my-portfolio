import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { getAssetUrl } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      
      {/* Profile Picture - positioned within hero section */}
      <Image 
        height={300} 
        width={390} 
        src={getAssetUrl("profilePic.png")} 
        alt="profilePic" 
        className="absolute hidden md:block right-4 md:right-8 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 h-[250px] md:h-[350px] lg:h-[450px] xl:h-[600px] w-auto z-10 object-contain max-w-[35%] md:max-w-[30%] lg:max-w-[25%]"
      />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 z-20">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl z-20"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl z-20">
            Hi! I&apos;m Mon, a Next.js Developer based in Philippines.
          </p>

          <a href="#about" className="z-20">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
