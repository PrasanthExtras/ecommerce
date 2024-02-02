import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Parent = (Component) => {
    const NewComponent = () => {
        return(
            <>
                <Header/>
                <Component/>
                <Footer/>
            </>
        )
    }
    return NewComponent
}

export default Parent