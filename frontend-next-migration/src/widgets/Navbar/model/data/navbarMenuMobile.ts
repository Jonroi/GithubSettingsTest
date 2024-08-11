import { RoutePaths } from '@/shared/appLinks/RoutePaths';
import img from '@/shared/assets/images/altLogo.png';
import img2 from '@/shared/assets/images/altLogoClan.png';
import { NavbarBuilder } from '@/widgets/Navbar/model/data/NavbarBuilder';
import { dropdowns } from '@/widgets/Navbar/model/data/dropdowns';
import { ArtGameSections } from '@/entities/PresentationPackages/model/data/artGameSections';
import { TeachingSections } from '@/entities/PresentationPackages/model/data/teachingSections';
import { CookiesSections } from '@/entities/PresentationPackages/model/data/cookiesSections';
import { PrivacySections } from '@/entities/PresentationPackages/model/data/privacySections';
import Heroes from '@/entities/Hero/model/heroes';

const navbarBuilder = new NavbarBuilder();
navbarBuilder.addLink('Main Page', RoutePaths.MAIN, false);
navbarBuilder.addDropDown('community', false, dropdowns.community);
navbarBuilder.addDropDown('game', false, dropdowns.game);
navbarBuilder.addDropDown('art', false, dropdowns.art);
navbarBuilder.addLink('team', RoutePaths.MEMBERS, false);
navbarBuilder.addLogo('Main Page', img as unknown as string, RoutePaths.MAIN);
navbarBuilder.addAuthProfile('profile', dropdowns.profile);
navbarBuilder.addAuthLogin('login', RoutePaths.auth_login);

export const navbarMenuMobile = navbarBuilder.build();

const navbarClanBuilder = new NavbarBuilder();
navbarClanBuilder.addLogo(
  'Nav logo',
  img2 as unknown as string,
  RoutePaths.MAIN,
);
navbarClanBuilder.addLink('leaderboard', RoutePaths.CLAN_LEADERBOARD, true);
navbarClanBuilder.addLink('all_clans', RoutePaths.CLAN_ALL, true);
navbarClanBuilder.addLink('my_clan', RoutePaths.MEMBERS, true);
navbarClanBuilder.addAuthLogin('login', RoutePaths.auth_login);

export const navbarClanMobile = navbarClanBuilder.build();

const navbarGameArtBuilder = new NavbarBuilder();
navbarGameArtBuilder.addLogo(
  'Main Page',
  img as unknown as string,
  RoutePaths.MAIN,
);
navbarGameArtBuilder.addLink('Main Page', RoutePaths.MAIN, false);
ArtGameSections.forEach((section) => {
  navbarGameArtBuilder.addLink(section.label, `#${section.id}`, false);
});

export const navbarGameArtMobile = navbarGameArtBuilder.build();

const navbarCookiesBuilder = new NavbarBuilder();
navbarCookiesBuilder.addLogo(
  'Main Page',
  img as unknown as string,
  RoutePaths.MAIN,
);
navbarCookiesBuilder.addLink('Main Page', RoutePaths.MAIN, false);
CookiesSections.forEach((section) => {
  navbarCookiesBuilder.addLink(section.label, `#${section.id}`, false);
});

export const navbarCookiesMobile = navbarCookiesBuilder.build();

const navbarPrivacyBuilder = new NavbarBuilder();
navbarPrivacyBuilder.addLogo(
  'Main Page',
  img as unknown as string,
  RoutePaths.MAIN,
);
navbarPrivacyBuilder.addLink('Main Page', RoutePaths.MAIN, false);
PrivacySections.forEach((section) => {
  navbarPrivacyBuilder.addLink(section.label, `#${section.id}`, false);
});

export const navbarPrivacyMobile = navbarPrivacyBuilder.build();

const navbarHeroesBuilder = new NavbarBuilder();
navbarHeroesBuilder.addLogo(
  'Main Page',
  img as unknown as string,
  RoutePaths.MAIN,
);
navbarHeroesBuilder.addLink('Main Page', RoutePaths.MAIN, false);

Heroes.forEach((hero) => {
  const heroLink = `${RoutePaths.HEROES}/${hero.title}`;
  navbarHeroesBuilder.addLink(hero.title, heroLink, false);
});

export const navbarHeroesMobile = navbarHeroesBuilder.build();
