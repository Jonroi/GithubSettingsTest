'use client';
import Image from 'next/image';
import { withBackgroundImage } from '@/shared/lib/hocs/withBackgroundImage';
import cls from './HeroContainer.module.scss';
import Link from 'next/link';
import { classNames } from '@/shared/lib/classNames/classNames';
import useKeyboardNavigation from './useKeyboardNavigation';
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
  groupAttributes: string;
  video: string;
  skillDescription: string;
  allHeroLinks: { title: string; link: string }[];
};

const HeroContainer = (props: Props) => {
  const {
    heroImg,
    heroGif,
    heroDescription,
    heroColor,
    leftArrowLink,
    rightArrowLink,
    xLink,
    heroName,
    group,
    video,
    groupAttributes,
    groupTextBg,
    skillDescription,
    allHeroLinks,
  } = props;

  useKeyboardNavigation({
    xLink,
    leftArrowLink: '',
    rightArrowLink: '',
  });

  return (
    <div className={classNames(cls.PageWrapper)}>
      <div className={cls.heroText}>
        <h2>{heroName}</h2>
      </div>
      <div className={cls.groupText}>
        <h2 style={{ color: heroColor }}>{group}</h2>
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
      <div className={cls.sideNavbar}>
        <ul>
          {allHeroLinks.map((hero) => (
            <li key={hero.title}>
              <Link href={hero.link}>{hero.title}</Link>
            </li>
          ))}
        </ul>
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
      <div className={cls.heroDescription}>
        <h3>{heroDescription}</h3>
      </div>
      <div className={cls.attributes}>
        <h3>
          <div dangerouslySetInnerHTML={{ __html: groupAttributes }} />
        </h3>
      </div>
      <div className={cls.skillVideo}>
        <h3>Special Skill</h3>
        <LiteYouTubeEmbed id={video} title={group} />
        <h5>{skillDescription}</h5>
      </div>
      <div className={cls.stats}>
        <h3>STATS</h3>
      </div>
      <div className={cls.attributesPie}>
        <h3>ATT PIE</h3>
      </div>
      <div className={cls.topPie}>
        <h3>TOP PIE</h3>
      </div>
      <div className={cls.topPlayers}>
        <h3>TOP PLAYERS</h3>
      </div>
    </div>
  );
};

export default withBackgroundImage({
  alt: 'HeroContainer bg image',
  imagePath: bgPicture as unknown as string,
  // @ts-ignore
})(HeroContainer);
