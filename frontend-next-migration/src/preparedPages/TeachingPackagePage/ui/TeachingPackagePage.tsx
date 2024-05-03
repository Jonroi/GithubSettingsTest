import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { FeedbackSideButton } from "@/features/FeedbackByExternalSource";
import { Paragraph } from "@/shared/ui/Paragraph";
import { useServerTranslation } from "@/shared/i18n";
import cls from "./TeachingPackagePage.module.scss"
import bgPicture from "@/shared/assets/images/mainpage/background.webp";
import downloadPicture from "@/shared/assets/images/teachingPackage/download.png";
import Image from "next/image";


type Props = {
    lng: string
}

const TeachingPackagePage = async ({ lng }: Props) => {

    const { t } = await useServerTranslation(lng, 'teachingPackage');

    return (
        <main>
            <div className={cls.backgroundImageWrapper}>
                <Image src={bgPicture} alt="Background" layout="fill" objectFit="cover" quality={100} />
            </div>
            <FeedbackSideButton disableMobile={true} />

            <Navbar overlaid />

            {/* Content here */}
            <section className={cls.MainGameArt}>
                <h1>{t("section-title")}</h1>

                <div className={cls.RowTextImg}>
                    <div className={cls.RowText}>
                        <Paragraph
                            text={t("text1")}
                        ></Paragraph>
                        <Paragraph
                            text={t("text2")}
                        ></Paragraph>
                        <Paragraph
                            text={t("text3")}
                        ></Paragraph>
                    </div>

                    <a href="/documento.pdf" download className={cls.RowImg}>
                        <Image  src={downloadPicture} alt="Background" />
                        <h1>Download</h1>
                    </a>



                </div>

            </section>
            {/*  */}

            <Footer />
        </main>
    );
};

export default TeachingPackagePage;