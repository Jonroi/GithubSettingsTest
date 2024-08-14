import einstein from '@/shared/assets/images/heros/einstein/einstein.png';
import einsteinGif from '@/shared/assets/images/heros/einstein/einstein-dab_dance.gif';

import pirate from '@/shared/assets/images/heros/pirate/pirate.png';
// import pirate from "@/shared/assets/images/heros/pirate/pirate-catwalk.gif";
import pirateGif from '@/shared/assets/images/heros/pirate/pirate-catwalk.gif';

import purpleGirls from '@/shared/assets/images/heros/purple-girls/purple-girls.png';
import purpleGirlsGif from '@/shared/assets/images/heros/purple-girls/purple-girls-boxing.gif';

import hannuHodari from '@/shared/assets/images/heros/hannu-hodari/hannu-hodari.png';
import hannuHodariGiF from '@/shared/assets/images/heros/hannu-hodari/hannu-hodari.gif';

import graffittiGaya from '@/shared/assets/images/heros/graffitti-gaya/graffitti-gaya.png';
import graffittiGayaGif from '@/shared/assets/images/heros/graffitti-gaya/grafitti-gaya.gif';

import darkblueBg from '@/shared/assets/images/heros/textBgColors/dark-blue.webp';
import greenBg from '@/shared/assets/images/heros/textBgColors/green.webp';
import lightblueBg from '@/shared/assets/images/heros/textBgColors/light-blue.webp';
import orangeBg from '@/shared/assets/images/heros/textBgColors/orange.webp';
import pinkBg from '@/shared/assets/images/heros/textBgColors/pink.webp';
import purpleBg from '@/shared/assets/images/heros/textBgColors/purple.webp';
import redBg from '@/shared/assets/images/heros/textBgColors/red.webp';
import yellowBg from '@/shared/assets/images/heros/textBgColors/yellow.webp';
import HeroAttributes from './heroAttributes';

const Heroes = [
  {
    id: 1,
    srcImg: hannuHodari,
    srcGif: hannuHodariGiF,
    alt: 'hannuHodariImgAlt',
    title: 'hannu-hodari',
    borderColor: '#41F50C',
    description: 'hannuHodariDescription',
    group: 'TORJUJAT // RETROFLEKTIO',
    groupTextBg: redBg,
    color: '#e20505',
    videoLink: 'bqGMXiUa-h4',
    heroAttributes: HeroAttributes.hannuHodari,
    skillDescription: 'hannuHodariSkillDescription',
  },
  {
    id: 2,
    srcImg: purpleGirls,
    srcGif: purpleGirlsGif,
    alt: 'purpleGirlsImgAlt',
    title: 'purple-girls',
    borderColor: '#41F50C',
    description: 'purpleGirlsDescription',
    group: 'SULAUTUJAT // KONFLUENSSI',
    groupTextBg: purpleBg,
    color: '#910494',
    videoLink: 'bqGMXiUa-h4',
    heroAttributes: HeroAttributes.purpleGirls,
    skillDescription: 'purpleGirlsSkillDescription',
  },
  {
    id: 3,
    srcImg: einstein,
    srcGif: einsteinGif,
    alt: 'einsteinImgAlt',
    title: 'einstein',
    borderColor: '#41F50C',
    description: 'einsteinDescription',
    group: 'ÄLYLLISTÄJÄT // EGOTISMI',
    groupTextBg: darkblueBg,
    color: '#330393',
    videoLink: 'bqGMXiUa-h4',
    heroAttributes: HeroAttributes.einstein,
    skillDescription: 'einsteinSkillDescription',
  },
  {
    id: 4,
    srcImg: graffittiGaya,
    srcGif: graffittiGayaGif,
    alt: 'graffitiGayaAlt',
    title: 'graffitiGaya',
    borderColor: '#41F50C',
    description: 'graffitiGayaDescription',
    group: 'PEILAAJAT // PROJEKTIO',
    groupTextBg: yellowBg,
    color: '#feed01',
    videoLink: 'bqGMXiUa-h4',
    heroAttributes: HeroAttributes.graffitiGaya,
    skillDescription: 'graffitiGayaSkillDescription',
  },
  {
    id: 5,
    srcImg: pirate,
    srcGif: pirateGif,
    alt: 'pirateAlt',
    title: 'pirate',
    borderColor: '#41F50C',
    description: 'pirateDescription',
    group: 'TORJUJAT // RETROFLEKTIO',
    groupTextBg: redBg,
    color: '#e20505',
    videoLink: 'bqGMXiUa-h4',
    heroAttributes: HeroAttributes.pirate,
    skillDescription: 'pirateSkillDescription',
  },
] as const;

export default Heroes;
