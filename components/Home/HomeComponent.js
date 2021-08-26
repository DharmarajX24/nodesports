import React from "react";
import FeaturedGame from "./FeaturedGame";
import FeaturedTournament from "./FeaturedTournament";
import Image from "next/image";
import Sample1 from "../../public/Sample1.png";
import Group1 from "../../public/Group1.png";
import Sample2 from "../../public/Sample2.png";
import Sample3 from "../../public/Sample3.png";
import Sample4 from "../../public/Sample4.png";
import Sample5 from "../../public/Sample5.png";
import Sample6 from "../../public/Sample6.png";

function HomeComponent({ data }) {
  return (
    <div>
      <Image src={Group1} alt="hero" layout="responsive" placeholder="blur" />
      <FeaturedTournament />
      <FeaturedGame />
    </div>
  );
}

export default HomeComponent;
