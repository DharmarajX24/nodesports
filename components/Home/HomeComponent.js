import React from "react";
import FeaturedGame from "./FeaturedGame";
import FeaturedTournament from "./FeaturedTournament";
import Image from "next/image";
import Hero from "../../public/Hero.png";
import Hero2 from "../../public/Hero2.png";

function HomeComponent({ data }) {
  return (
    <div>
      <Image src={Hero2} alt="hero" layout="fill" placeholder="blur" />
      <h1 className=" z-30 text-white text-2xl sm:text-4xl md:text-5xl w-full absolute top-1/2 text-center font-banger font-black">
        PLAY, COMPETE, ORGANIZE.
        <div className='text-center'>
          THE ALL IN ONE <span className="text-branding">ESPORTS</span> PLATFORM
        </div>
      </h1>
      <FeaturedTournament />
      <FeaturedGame />
    </div>
  );
}

export default HomeComponent;
