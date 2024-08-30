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

    const page = {
        title: t('Comics')
    }

    return {
        page,
        seo
    }

}