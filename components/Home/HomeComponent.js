import React from "react";
import FeaturedGame from "./FeaturedGame";
import FeaturedTournament from "./FeaturedTournament";
import Image from "next/image";
import Hero from "../../public/Hero.png";

function HomeComponent({ data }) {
  return (
    <div>
      <Image src={Hero} alt="hero" layout="responsive" placeholder="blur" />
      <FeaturedTournament />
      <FeaturedGame />
    </div>
  );
}

export default HomeComponent;
