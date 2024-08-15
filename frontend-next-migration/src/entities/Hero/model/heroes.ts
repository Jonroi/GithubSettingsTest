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

import conman from '@/shared/assets/images/heros/conman/conman.png';
import conmanGif from '@/shared/assets/images/heros/conman/conman.gif';

import bodybuilder from '@/shared/assets/images/heros/bodybuilder/bodybuilder.png';
import bodybuilderGif from '@/shared/assets/images/heros/bodybuilder/bodybuilder.gif';

import preacher from '@/shared/assets/images/heros/preacher/preacher.png';
import preacherGif from '@/shared/assets/images/heros/preacher/preacher.gif';

import darkblueBg from '@/shared/assets/images/heros/textBgColors/dark-blue.webp';
import greenBg from '@/shared/assets/images/heros/textBgColors/green.webp';
import lightblueBg from '@/shared/assets/images/heros/textBgColors/light-blue.webp';
import orangeBg from '@/shared/assets/images/heros/textBgColors/orange.webp';
import pinkBg from '@/shared/assets/images/heros/textBgColors/pink.webp';
import purpleBg from '@/shared/assets/images/heros/textBgColors/purple.webp';
import redBg from '@/shared/assets/images/heros/textBgColors/red.webp';
import yellowBg from '@/shared/assets/images/heros/textBgColors/yellow.webp';

const Heroes = [
  {
    id: 1,
    srcImg: hannuHodari,
    srcGif: hannuHodariGiF,
    alt: 'hannuHodariImgAlt',
    title: 'hannu-hodari',
    borderColor: '#41F50C',
    description: 'hannuHodariDescription',
    group: 'groupObedient',
    groupAttributes: 'obedientAttributes',
    groupTextBg: redBg,
    color: '#e20505',
    videoLink: 'bqGMXiUa-h4',
    skillDescription: 'obedientDescription',
  },
  {
    id: 2,
    srcImg: purpleGirls,
    srcGif: purpleGirlsGif,
    alt: 'purpleGirlsImgAlt',
    title: 'purple-girls',
    borderColor: '#41F50C',
    description: 'purpleGirlsDescription',
    group: 'groupConfluent',
    groupAttributes: 'confluentAttributes',
    groupTextBg: purpleBg,
    color: '#910494',
    videoLink: 'bqGMXiUa-h4',
    skillDescription: 'confluentDescription',
  },
  {
    id: 3,
    srcImg: einstein,
    srcGif: einsteinGif,
    alt: 'einsteinImgAlt',
    title: 'einstein',
    borderColor: '#41F50C',
    description: 'einsteinDescription',
    group: 'groupIntellectualizer',
    groupAttributes: 'intellectualizerAttributes',
    groupTextBg: darkblueBg,
    color: '#330393',
    videoLink: 'bqGMXiUa-h4',
    skillDescription: 'intellectualizerDescription',
  },
  {
    id: 4,
    srcImg: graffittiGaya,
    srcGif: graffittiGayaGif,
    alt: 'graffitiGayaAlt',
    title: 'graffitiGaya',
    borderColor: '#41F50C',
    description: 'graffitiGayaDescription',
    group: 'groupProjector',
    groupAttributes: 'projectorAttributes',
    groupTextBg: yellowBg,
    color: '#feed01',
    videoLink: 'bqGMXiUa-h4',
    skillDescription: 'projectorDescription',
  },
  {
    id: 5,
    srcImg: pirate,
    srcGif: pirateGif,
    alt: 'pirateAlt',
    title: 'pirate',
    borderColor: '#41F50C',
    description: 'pirateDescription',
    group: 'groupRetroflector',
    groupAttributes: 'retroflectorAttributes',
    groupTextBg: redBg,
    color: '#e20505',
    videoLink: 'bqGMXiUa-h4',
    skillDescription: 'retroflectorDescription',
  },
  {
    id: 6,
    srcImg: bodybuilder,
    srcGif: 'bodybuilderGif',
    alt: 'bodybuilderAlt',
    title: 'bodybuilder',
    borderColor: '#41F50C',
    description: 'bodybuilderDescription',
    group: 'groupDesensitizer',
    groupAttributes: 'desensitizerAttributes',
    groupTextBg: lightblueBg,
    color: '#e20505',
    videoLink: 'bqGMXiUa-h4',
    skillDescription: 'desensitizerDescription',
  },
  {
    id: 7,
    srcImg: preacher,
    srcGif: 'preacherGif',
    alt: 'preacherAlt',
    title: 'preacher',
    borderColor: '#41F50C',
    description: 'preacherDescription',
    group: 'groupObedient',
    groupAttributes: 'obedientAttributes',
    groupTextBg: orangeBg,
    color: '#e20505',
    videoLink: 'bqGMXiUa-h4',
    skillDescription: 'obedientDescription',
  },
  {
    id: 8,
    srcImg: conman,
    srcGif: 'conmanGif',
    alt: 'conmanAlt',
    title: 'conman',
    borderColor: '#41F50C',
    description: 'conmanDescription',
    group: 'groupTrickster',
    groupAttributes: 'tricksterAttributes',
    groupTextBg: greenBg,
    color: '#e20505',
    videoLink: 'bqGMXiUa-h4',
    skillDescription: 'tricksterDescription',
  },
] as const;

export default Heroes;
