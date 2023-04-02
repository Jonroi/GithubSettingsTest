import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import {Suspense} from "react";
// import {Navbar} from "@/widgets/Navbar";
import {ScrollTop} from "@/features/ScrollTop";
import {Footer} from "@/widgets/Footer";


const App = () => {

    return(
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                    <AppRouter />
                    <ScrollTop/>
                    <Footer/>
            </Suspense>
        </div>
    )};
export default App;
