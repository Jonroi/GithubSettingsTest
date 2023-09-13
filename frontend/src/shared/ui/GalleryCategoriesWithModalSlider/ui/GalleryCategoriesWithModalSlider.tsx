import {useEffect, useState} from "react";
import FsLightbox from "fslightbox-react";
import cls from "./styles.module.scss";

type Props = {
    title: string,
    sources : string[]
}

export const GalleryCategoriesWithModalSlider = ({title, sources}: Props) => {
    const [toggler, setToggler] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // This code block fixes a slider library bug with scrollbar.
    // For more details, refer to the styles in index.scss.
    useEffect(() => {
        function cleanup() {
            window.document.body.classList.remove('FsLightbox');
        }
        if(isOpen){
            window.document.body.classList.add('FsLightbox');
        }
       else{
           cleanup()
        }
        return () =>{
            cleanup()
        }
    }, [isOpen]);

    return (
        <div style={{cursor: "pointer"}}>
            <div onClick={()=> setToggler(!toggler)}>
                <h2 className={cls.title}>{title}</h2>
                <img className={cls.categoryImg} src={sources[0]} alt=""/>
            </div>

            <FsLightbox
                zoomIncrement={1}
                onOpen={()=>setIsOpen(true)}
                onClose={()=>setIsOpen(false)}
                loadOnlyCurrentSource={true}
                toggler={toggler}
                sources={sources.map((s=>{
                    return (
                        <img className={cls.sliderImg} src={s}/>
                    )
                }))}
            />
        </div>
    )
}