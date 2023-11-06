import {CSSProperties, memo, useMemo} from "react";
import Image from 'next/image'
import {sidebarItemType} from "@/shared/ui/Sidebar/model/items";
import {navbarMenuLoginProfile} from "@/widgets/Navbar/model/data/navbarMenuDesktop";
import {useLogoutMutation, useUserPermissions} from "@/entities/Auth";
import cls from "./NavbarMobile.module.scss";
import {classNames} from "@/shared/lib/classNames/classNames";
import {Sidebar, ISidebarItem} from "@/shared/ui/Sidebar";
import {navbarItemType, NavbarMenuMobile} from "../../model/types/types";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";
import {navLogoMobile} from "../../model/data/navbarMenuMobile";




interface NavbarTouchProps {
    overlayed ?: boolean;
    marginTop?: number;
    onBurgerButtonClick?: (isMenuOpen: boolean) => void;
    navBarItemsList?: NavbarMenuMobile;
    side? : 'left'| 'right';
    className? : string;
}

const NavbarTouchComponent = ( props : NavbarTouchProps) => {

    const {
        overlayed = false,
        marginTop,
        navBarItemsList,
        // navLogo,
        side = 'left',
        className = ''
    } = props;




    const style = marginTop
        ? ({ "marginTop": `${marginTop}px` } as CSSProperties)
        : {};

    const mods: Record<string, boolean> = {
        [cls.overlayed]: overlayed,
    } as Record<string, boolean>;

    const sidebarMods: Record<string, boolean> = {
        [cls.left] : side === 'left',
        [cls.right] : side === 'right',
    } as Record<string, boolean>;



    const sidebarItemsList: ISidebarItem[] = useMemo(() => {
        return (navBarItemsList || [])
            .map(item => {
                if (item.type === navbarItemType.NavbarMenuMobileItem) {
                    return { path: item.path, name: item.name, type: sidebarItemType.ISidebarItemBasic };
                }
                if (item.type === navbarItemType.NavbarMenuMobileDropDownItem) {
                    return { name: item.name, elements: item.elements, type: sidebarItemType.ISidebarItemDropDown };
                }
                return null;
            })
            .filter(item => item !== null) as ISidebarItem[];
    }, [navBarItemsList]);

    const {canI} = useUserPermissions();
    const [logout] = useLogoutMutation();

    return (
            <nav className={classNames(cls.Navbar, mods, [className])} style={style}>


                <div className={cls.NavbarMobile}>

                    <Sidebar
                        buttonClassName={classNames(cls.NavbarMobile__burger, sidebarMods)}
                        sidebarItemsList={sidebarItemsList}
                        side={side}
                        closeOnClickOutside

                        bottomItems={
                            <div className={cls.authSection}>
                                {
                                    canI("canISeeLogin") &&  <AppLink
                                        className={cls.authSectionLink}
                                        theme={AppLinkTheme.PRIMARY}
                                        to={navbarMenuLoginProfile.login.path}
                                        key={navbarMenuLoginProfile.login.path}
                                    >
                                        <span>{navbarMenuLoginProfile.login.name}</span>
                                    </AppLink>
                                }

                                {
                                    canI("canISeeLogout") &&
                                         <div onClick={()=>logout()}>Logout</div>
                                }

                            </div>
                        }
                    />
                    <AppLink
                        className={cls.navLogo + ' ' + cls.NavbarMobile__center}
                        theme={AppLinkTheme.PRIMARY}
                        to={navLogoMobile.path}
                    >
                        <Image
                            loading={"eager"}
                            src={navLogoMobile.src}
                            alt={navLogoMobile.name}
                        />

                    </AppLink>
                </div>
            </nav>
        )

};

NavbarTouchComponent.displayName = 'NavbarTouch';

export default memo(NavbarTouchComponent);