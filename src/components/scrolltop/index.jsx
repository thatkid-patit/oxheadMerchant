import React from "react";
import {
    ScrollTopSelf,
    ScrollTopIcon
} from './elements'


function ScrollTop() {

    window.onscroll = () => {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('.scroll').style.display = "flex";
        } else {
            document.querySelector('.scroll').style.display = "none";
        };
    };

    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };


    return(
        <>
            <ScrollTopSelf className='scroll' onClick={scrollTop}>
                <ScrollTopIcon/>
            </ScrollTopSelf>
        </>
    )
}

export default ScrollTop