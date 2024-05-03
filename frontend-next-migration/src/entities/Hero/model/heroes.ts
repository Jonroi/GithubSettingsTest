import greenHaired from "@/shared/assets/images/heros/green-haired/green-haired.webp";
import greenHairedGiF from "@/shared/assets/images/heros/green-haired/green-haired-walk.gif";
// import greenHairedGiF from "@/shared/assets/images/heros/green-haired/green-haired-walk-2.gif";

import einstein from "@/shared/assets/images/heros/einstein/einstein.webp";
import einsteinGif from "@/shared/assets/images/heros/einstein/einstein-dab_dance.gif";


import pirate from "@/shared/assets/images/heros/pirate/pirate.webp";
import pirateGif from "@/shared/assets/images/heros/pirate/pirate-catwalk.gif";

import purpleGirls from "@/shared/assets/images/heros/purple-girls/purple-girls.svg";
import purpleGirlsGif from "@/shared/assets/images/heros/purple-girls/purple-girls-boxing.gif";

import hannuHodari from "@/shared/assets/images/heros/hannu-hodari/hannu-hodari.png";
import hannuHodariGiF from "@/shared/assets/images/heros/hannu-hodari/hannu-hodari.gif";

import graffittiGaya from "@/shared/assets/images/heros/graffitti-gaya/graffitti-gaya.png";
import graffittiGayaGif from "@/shared/assets/images/heros/graffitti-gaya/grafitti-gaya.gif";



const Heroes = [
  {
    id: 0,
    srcImg: greenHaired,
    srcGif: greenHairedGiF,
    alt: "greenHairedImgAlt",
    title: "green-haired",
    borderColor: "#41F50C",
    description: "greenHairedDescription"
  },
  {
    id: 1,
    srcImg: hannuHodari,
    srcGif: hannuHodariGiF,
    alt: "hannuHodariImgAlt",
    title: "hannu-hodari",
    borderColor: "#41F50C",
    description: "hannuHodariDescription"
  },
  {
    id: 2,
    srcImg: purpleGirls,
    srcGif: purpleGirlsGif,
    alt: "purpleGirlsImgAlt",
    title: "purple-girls",
    borderColor: "#41F50C",
    description: "purpleGirlsDescription"
  },
  {
    id: 3,
    srcImg: einstein,
    srcGif: einsteinGif,
    alt: "einsteinImgAlt",
    title: "einstein",
    borderColor: "#41F50C",
    description: "einsteinDescription"
  },
  {
    id: 4,
    srcImg: graffittiGaya,
    srcGif: graffittiGayaGif,
    alt: "graffitiGayaAlt",
    title: "graffitiGaya",
    borderColor: "#41F50C",
    description: "graffitiGayaDescription",
  },
  {
    id: 5,
    srcImg: pirate,
    srcGif: pirateGif,
    alt: "pirateAlt",
    title: "pirate",
    borderColor: "#41F50C",
    description: "pirateDescription",
  }
] as const;

export default Heroes;