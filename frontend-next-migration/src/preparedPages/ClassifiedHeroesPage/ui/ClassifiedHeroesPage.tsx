import { Navbar } from "@/widgets/Navbar";
import { FeedbackSideButton } from "@/features/FeedbackByExternalSource";
import { useServerTranslation } from "@/shared/i18n";
import cls from "./ClassifiedHeroesPage.module.scss"
import bgPicture from "@/shared/assets/images/backgrounds/background.webp";
import {withBackgroundImage} from "@/shared/lib/hocs/withBackgroundImage";
import { SectionHeroesBlocks } from "@/widgets/SectionHeroesBlocks";
import { HorizontalLines } from "@/shared/ui/HorizontalLines";


type Props = {
    lng: string
}

const ClassifiedHeroesPage = async ({ lng }: Props) => {

    const { t } = await useServerTranslation(lng, 'heroes');
    const sameBg = undefined;

    return (
        <main className={cls.main}>
            <FeedbackSideButton disableMobile={true} />

            <Navbar overlaid />

            {/* Content here */}
            <SectionHeroesBlocks
                backgroundImageSrc={sameBg}
            />
            <HorizontalLines></HorizontalLines>
            <SectionHeroesBlocks
                backgroundImageSrc={sameBg}
            />
            <HorizontalLines></HorizontalLines>
        </main>





    );
};

export default withBackgroundImage({
    alt: "TeachingPackagePage underground style background",
    imagePath: bgPicture as unknown as string,
    className: cls.wholePageBG
    // @ts-ignore
})(ClassifiedHeroesPage);

// export default GameArtPage;