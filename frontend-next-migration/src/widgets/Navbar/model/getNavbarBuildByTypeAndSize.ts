import { NavBarType } from './types';
import {
  navbarClanMobile,
  navbarGameArtMobile,
  navbarMenuMobile,
  navbarCookiesMobile,
  navbarPrivacyMobile,
  navbarHeroesMobile,
} from './data/navbarMenuMobile';
import {
  navbarClanDesktop,
  navbarGameArtDesktop,
  navbarMenuDesktop2,
  navbarCookiesDesktop,
  navbarPrivacyDesktop,
  navbarHeroesDesktop,
} from './data/navbarMenuDesktop';

export const getNavbarBuildByTypeAndSize = (
  type: NavBarType,
  isMobileSize: boolean,
) => {
  if (isMobileSize) {
    switch (type) {
      case 'Default':
        return navbarMenuMobile;
      case 'Clan':
        return navbarClanMobile;
      case 'GameArt':
        return navbarGameArtMobile;
      case 'Cookies':
        return navbarCookiesMobile;
      case 'Privacy':
        return navbarPrivacyMobile;
      case 'Heroes':
        return navbarHeroesMobile;
      default:
        return navbarMenuMobile;
    }
  } else {
    switch (type) {
      case 'Default':
        return navbarMenuDesktop2;
      case 'Clan':
        return navbarClanDesktop;
      case 'GameArt':
        return navbarGameArtDesktop;
      case 'Cookies':
        return navbarCookiesDesktop;
      case 'Privacy':
        return navbarPrivacyDesktop;
      case 'Heroes':
        return navbarHeroesDesktop;
      default:
        return navbarMenuDesktop2;
    }
  }
};
