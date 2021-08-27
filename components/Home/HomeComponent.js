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
      <FeaturedTournament />
      <FeaturedGame />
    </div>
  );
}

export default HomeComponent;
