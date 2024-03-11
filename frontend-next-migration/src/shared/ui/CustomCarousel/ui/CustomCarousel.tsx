'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, {Settings} from "react-slick";

import "./CustomCarousel.scss"
import {ReactNode} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

type Props = {
    settings?: Settings
    children: ReactNode,
    className?: string
}


const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

};


const CustomCarousel = (props: Props) => {
    const {settings, children, className=''} = props;
    const mergedSettings = {...defaultSettings, ...settings};

    return (
        <div className={classNames("myCustomCarousel-wrapper", {}, [className])}>
                    <Slider {...mergedSettings}>
                        {children}
                    </Slider>
        </div>
    );
};

export default CustomCarousel;


// @ts-ignore
