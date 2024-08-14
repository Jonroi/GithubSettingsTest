'use client';
import Image from 'next/image';
import { withBackgroundImage } from '@/shared/lib/hocs/withBackgroundImage';
import cls from './HeroContainer.module.scss';
import Link from 'next/link';
import { classNames } from '@/shared/lib/classNames/classNames';
import useKeyboardNavigation from './useKeyboardNavigation';
import { useRef } from 'react';
import bgPicture from '@/shared/assets/images/backgrounds/background.webp';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

type Props = {
  heroImg: string;
  heroGif: string;
  heroName: string;
  heroDescription: string;
  heroColor: string;
  leftArrowLink: string;
  rightArrowLink: string;
  xLink: string;
  group: string;
  groupTextBg: string;
  video: string;
  attributes: number;
  skillDescription: string;
};

const HeroContainer = (props: Props) => {
  const {
    heroImg,
    heroGif,
    heroDescription,
    leftArrowLink,
    rightArrowLink,
    xLink,
    heroName,
    group,
    video,
    attributes,
    skillDescription,
  } = props;

  useKeyboardNavigation({
    xLink,
    leftArrowLink: '',
    rightArrowLink: '',
  });

  return (
    <div className={classNames(cls.PageWrapper)}>
      <div className={cls.headerRow}>
        <div className={cls.heroText}>
          <h3>{heroName}</h3>
          <h3>{group}</h3>
        </div>
        <div className={cls.searchbar}>
          <h3>SEARCHBAR</h3>
        </div>
        <div className={cls.xLinkButton}>
          <Link href={xLink}>
            <Button theme={ButtonTheme.Graffiti}>
              <h5>X</h5>
            </Button>
          </Link>
        </div>
      </div>
      <div className={cls.sideNavbar}>
        <h3>SIDE NAVBAR</h3>
      </div>
      <Image
        quality={100}
        className={cls.heroImg}
        src={heroImg}
        alt='hero'
        width={250}
        height={250}
        priority={true}
      />
      <div className={cls.attributesPie}>
        <h3>ATTRIBUTES PIE</h3>
      </div>
      <div className={cls.topPie}>
        <h3>TOP PIE</h3>
      </div>
      <div className={cls.heroDescription}>
        <h3>{heroDescription}</h3>
      </div>
      <div className={cls.attributes}>
        {Object.entries(attributes).map(([key, value]) => (
          <h3 key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </h3>
        ))}
      </div>
      <div className={cls.skillVideo}>
        <h3>Special Skill</h3>
        <LiteYouTubeEmbed
          id={video}
          title='What’s new in Material Design for the web (Chrome Dev Summit 2019)'
        />
      </div>
      <div className={cls.specialSkill}>
        <h3>{skillDescription}</h3>
      </div>
      <div className={cls.stats}>
        <h3>STATS</h3>
      </div>
      <div className={cls.topPlayers}>
        <h3>TOP PLAYERS</h3>
      </div>
    </div>
  );
};

export default withBackgroundImage({
  alt: 'Teaching Package bg image',
  imagePath: bgPicture as unknown as string,
  // @ts-ignore
})(HeroContainer);
