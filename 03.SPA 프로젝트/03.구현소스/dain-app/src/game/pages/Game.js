import React, { useEffect } from "react";

import VideoIntro from "../modules/VideoIntro";
import Overview from "../modules/Overview";
import Story from "../modules/Story";
import VideoTrailer from "../modules/VideoTrailer";
import Features from "../modules/Features";
import RelatedVideo from "../modules/RelatedVideo";

const Game = () =>{
    useEffect(()=>{
        // Story 섹션
        const storyHeader = document.querySelector(".story_header");
        const storyTit = document.querySelector(".story_titbx");
        const storySplitWrap = document.querySelector(".story_splitwrap")
        const storySplit = document.querySelectorAll(".story_split")
        const storyCont =  document.querySelector(".story_cont")

        // Features 섹션
        const featuresHeader = document.querySelector(".features_header");
        const featuresTit = document.querySelector(".features_titbx");
        const featuresSplitWrap = document.querySelector(".features_splitwrap");
        const featuresSplit = document.querySelectorAll(".features_split")
        const featuresCont = document.querySelector(".features_cont")

        const retVal = (x) => x.getBoundingClientRect().top;
        
        const changeStyle = (x, y) => {
            x.style.clipPath = `
            polygon(0px 0px, 100% 0px, 100% ${50-y}%, 0px ${50-y}%, 0px ${50+y}%, 100% ${50+y}%, 100% 100%, 0px 100%)
            `
        }

        let tgpos = 0;

        const openTitle = (header, tit, splitwrap, split, cont) =>{
            tgpos = retVal(header)
            
            let minusHeight = header.clientHeight-tit.clientHeight
            let scrollRatio = (tgpos / minusHeight * 100)/2

            // console.log(tgpos)
            

            if(tgpos < 200 && tgpos >= -(minusHeight)){
                changeStyle(splitwrap, scrollRatio);
                splitwrap.style.height = `${-scrollRatio*2}%`
                split[0].style.transform = `translate(-50%, -${50-(scrollRatio)}%)`
                split[1].style.transform = `translate(-50%, -${50+(scrollRatio)}%)`
                cont.style.top = `${100+(scrollRatio*2)}vh`;
            }
            else if(tgpos < -(minusHeight)){
                return
            }
        }

        const openTitle2 = (header, tit, splitwrap, split, cont) =>{
            tgpos = retVal(header)

            // console.log(cont.clientHeight);
            
            let minusHeight = storyHeader.clientHeight-storyTit.clientHeight
            let scrollRatio = (tgpos / minusHeight * 100)/2
            let minusHeight2 = header.clientHeight-tit.clientHeight

            console.log(minusHeight2)

            if(tgpos < 200 && tgpos >= -(minusHeight2)){
                changeStyle(splitwrap, scrollRatio);
                splitwrap.style.height = `${-scrollRatio*2}%`
                split[0].style.transform = `translate(-50%, -${50-(scrollRatio)}%)`
                split[1].style.transform = `translate(-50%, -${50+(scrollRatio)}%)`
                cont.style.top = `${100+(scrollRatio*2)}vh`;
            }
            else if(tgpos < -(minusHeight2)){
                return;
            }
        }

        window.addEventListener("scroll", ()=>openTitle(storyHeader, storyTit, storySplitWrap, storySplit, storyCont));
        window.addEventListener("scroll", ()=>openTitle2(featuresHeader, featuresTit, featuresSplitWrap, featuresSplit, featuresCont)); 
    })

    return (
        <>
            <VideoIntro />
            <Overview />
            <Story />
            <VideoTrailer />
            <Features />
            <RelatedVideo />
        </>
    )
}

export default Game;