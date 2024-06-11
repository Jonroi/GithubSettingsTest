'use client'
import {RefObject, useEffect, useRef, useState} from 'react';
import bgBox from "@/shared/assets/images/heros/hero-container/readyContainer.png";
import Image from 'next/image';
import cls from "./HeroContainer.module.scss";
import Link from "next/link";
import leftArrow from "@/shared/assets/images/heros/hero-container/leftArrow.svg";
import rightArrow from "@/shared/assets/images/heros/hero-container/rightArrow.svg";
import {classNames} from "@/shared/lib/classNames/classNames";
import useImageDistance from "./useImageDistance";

type Props = {
    heroImg: string,
    heroDescription: string,
    heroColor: string,
}

const HeroContainer = (props: Props) => {
    const {
        heroImg,
        heroDescription,
        heroColor
    } = props;

    const {
        containerRef,
        imageRef,
        distanceToBottom,
        handleImageLoad
    } = useImageDistance();

    return (
        <div className={cls.wrapper}>
            <div className={cls.arrowsContainerWrapper}>


                <Link className={classNames(cls.leftArrow, {}, [cls.arrow])} href={"leftArrowLink"}>
                    <Image src={leftArrow} alt="leftArrow"/>
                </Link>



                <div className={cls.container} ref={containerRef}>
                    <Image className={cls.bgImg} src={bgBox} alt="hero" width={400} height={400}
                           onLoad={handleImageLoad}/>
                    <div className={cls.contentWrapper}>
                        <div className={cls.content}>
                            <div className={cls.heroImgWrapper} style={{backgroundColor: heroColor}}>
                                <Image
                                    className={cls.heroImg}
                                    src={heroImg}
                                    alt="hero"
                                    width={500}
                                    height={500}
                                    ref={imageRef}
                                    onLoad={handleImageLoad}
                                />
                            </div>
                            <div className={cls.heroDescription} style={{maxHeight: distanceToBottom}}>
                                <p>
                                    {/*todo delete after testing*/}
                                    {heroDescription}
                                    {heroDescription}
                                    {heroDescription}
                                    {heroDescription}
                                    {heroDescription}
                                    {heroDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <Link className={classNames(cls.rightArrow, {}, [cls.arrow])} href={"rightArrowLink"}>
                    <Image src={rightArrow} alt="rightArrow"/>
                </Link>

            </div>
        </div>
    )
};

export default HeroContainer;
