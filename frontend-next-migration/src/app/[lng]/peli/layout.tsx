import {ReactNode} from "react";
import {Navbar} from "@/widgets/Navbar";
import {Footer} from "@/widgets/Footer";
import {ScrollTop} from "@/features/ScrollTop";

type Props = {
    children: ReactNode;
}

export default function GameLayout({children}: Props) {
    return (
        <>
            <Navbar overlaid/>
            <div style={{paddingTop: "20px"}}></div>
            {children}
            <Footer/>
        </>
    )
}