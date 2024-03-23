import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function HeaderLayout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default HeaderLayout;