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
        
        const changeStyle = (splitwrap, ratio, split, cont) => {
            splitwrap.style.clipPath = `
            polygon(0px 0px, 100% 0px, 100% ${50-ratio}%, 0px ${50-ratio}%, 0px ${50+ratio}%, 100% ${50+ratio}%, 100% 100%, 0px 100%)
            `
            splitwrap.style.height = `${-ratio*2}%`
            split[0].style.transform = `translate(-50%, -${50-(ratio)}%)`
            split[1].style.transform = `translate(-50%, -${50+(ratio)}%)`
            cont.style.top = `${100+(ratio*2)}vh`;
        }

        let tgpos = 0;

        const openTitle = (header, tit, splitwrap, split, cont) =>{
            tgpos = retVal(header)
            
            let minusHeight = header.clientHeight-tit.clientHeight
            let scrollRatio = (tgpos / minusHeight * 100)/2


            if(tgpos < 200 && tgpos >= -(minusHeight)){
                changeStyle(splitwrap, scrollRatio, split, cont);
            }
            else if(tgpos < -(minusHeight)){
                return
            }
        }

        const openTitle2 = (header, tit, splitwrap, split, cont) =>{
            tgpos = retVal(header)

            
            let minusHeight = storyHeader.clientHeight-storyTit.clientHeight
            let scrollRatio = (tgpos / minusHeight * 100)/2
            let minusHeight2 = header.clientHeight-tit.clientHeight

            if(tgpos < 200 && tgpos >= -(minusHeight2)){
                changeStyle(splitwrap, scrollRatio, split, cont);
            }
            else if(tgpos < -(minusHeight2)){
                return;
            }
        }

        const overAction = document.querySelectorAll(".overview_action");
        const featuresAction = document.querySelectorAll(".features_action");
        const contlist = document.querySelectorAll(".contlist");

        const hv = window.innerHeight/5*4;

        const showIt = x => {
            x.forEach(ele=>{
                let xval = retVal(ele);
                
                if(xval < hv && xval > 0) {
                    ele.classList.add("on");
                }   
            })
        }

        const mvid2 = document.querySelector("#mvid2")

        let mvH = mvid2.clientHeight;
        mvH = -(mvH/2)

        const videoPlay = x => {
            let videoPos = retVal(x);

            if(videoPos < hv && videoPos > mvH) {
                x.play()
            }
            else {
                x.pause()
            }
        }

        const featuresVideo = document.querySelectorAll(".features_video");
        const hv2 = window.innerHeight/3*1;
        const videoPlay2 = x => {
            x.forEach(ele=>{
                let videoPos = retVal(ele);
                let mvH2 = ele.clientHeight;
                mvH2 = -(mvH2)
                
                if(videoPos < hv2 && videoPos > mvH2) {
                    ele.classList.add("on")
                    ele.play();
                }
                else {
                    ele.pause();
                    ele.classList.remove("on");
                }
            })
        }



        window.addEventListener("scroll", ()=>openTitle(storyHeader, storyTit, storySplitWrap, storySplit, storyCont));
        window.addEventListener("scroll", ()=>openTitle2(featuresHeader, featuresTit, featuresSplitWrap, featuresSplit, featuresCont)); 
        window.addEventListener("scroll", ()=>showIt(overAction))
        window.addEventListener("scroll", ()=>showIt(featuresAction))
        window.addEventListener("scroll", ()=>showIt(contlist))
        window.addEventListener("scroll", ()=>videoPlay(mvid2))
        window.addEventListener("scroll", ()=>videoPlay2(featuresVideo))

        
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