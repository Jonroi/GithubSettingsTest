import React from 'react';
import { HeroContainer } from '@/entities/Hero';
import { RoutePaths } from '@/shared/appLinks/RoutePaths';
import { HorizontalLines } from '@/shared/ui/HorizontalLines';

type HeroData = {
  id: number;
  img: string;
  title: string;
  alt: string;
  heroColor: string;
  description: string;
  borderColor: string;
  imgGif: string;
  group: string;
  groupTextBg: string;
  videoLink: string;
  groupAttributes: number[];
  skillDescription: string;
};
interface HeroLink {
  title: string;
  link: string;
}

interface Props {
  selectedHero: HeroData;
  prevHeroLink: string;
  nextHeroLink: string;
  allHeroLinks: HeroLink[];
}

const HeroPage: React.FC<Props> = ({
  selectedHero,
  prevHeroLink,
  nextHeroLink,
  allHeroLinks,
}) => {
  return (
    <>
      <HeroContainer
        // @ts-ignore
        group={selectedHero.group}
        groupTextBg={selectedHero.groupTextBg}
        heroColor={selectedHero.heroColor}
        heroImg={selectedHero.img}
        heroName={selectedHero.title}
        heroDescription={selectedHero.description}
        leftArrowLink={prevHeroLink}
        rightArrowLink={nextHeroLink}
        heroGif={selectedHero.imgGif}
        xLink={RoutePaths.HEROES}
        video={selectedHero.videoLink}
        groupAttributes={selectedHero.groupAttributes}
        skillDescription={selectedHero.skillDescription}
        allHeroLinks={allHeroLinks}
      />
      <HorizontalLines />
    </>
  );
};

export default HeroPage;
