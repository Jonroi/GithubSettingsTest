import {useServerTranslation} from "@/shared/i18n";
import {AppExternalLinks} from "@/shared/appLinks/appExternalLinks";
import {RoutePaths} from "@/shared/appLinks/RoutePaths";

export async function _getPage (lng: string){
    const {t} = await useServerTranslation(lng, 'main');


    const seo = {
        title: t("head-title"),
        description: t("head-description"),
        keywords: t("head-keywords"),
    }

    const playWithUs = {
        title: t("playWithUs-title"),
        webGl: {
            title: t('PlayOnline'),
            link: AppExternalLinks.webgl
        },
        googlePLayLink: AppExternalLinks.downloadAndroid,
        belowNavs: [{
            title: t("playWithUs-OpenPositions-title"),
            body: t("playWithUs-OpenPositions-body"),
            link: AppExternalLinks.duunitori,
            isExternal: true
        },
            {
                title: t("playWithUs-BecomeATester-title"),
                body: t("playWithUs-BecomeATester-body"),
                link: AppExternalLinks.discord,
                isExternal: true
            }]
    }


    const projectDescription = {
        title: t('project-description-title'),
        description: t('project-description-text')
    }

    const getToKnowComics = {
        title: t("getToKnowComics-title"),
        buttonParams: { innerText: t("getToKnowComics"), href: RoutePaths.COMICS_GALLERY }
    }

    const videoAndGalleries = {
        videoLink: AppExternalLinks.previewVideoYoutube,
        title: t("videoAndGalleries-title")
    }


    const classifiedHeroesBlocks = {
        title: t("classifiedHeroesBlocks-title"),
        seeMoreLink: {
            text: t("classifiedHeroesBlocks-seeMore"),
            href: RoutePaths.HEROES
        }
    }

    const page = {
        playWithUs,
        projectDescription,
        getToKnowComics,
        videoAndGalleries,
        classifiedHeroesBlocks
    }


    return {
        page,
        seo
    }

}