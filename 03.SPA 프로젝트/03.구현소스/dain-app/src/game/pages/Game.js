import React from "react";

import VideoIntro from "../modules/VideoIntro";
import Overview from "../modules/Overview";
import Story from "../modules/Story";
import VideoTrailer from "../modules/VideoTrailer";
import Features from "../modules/Features";
import RelatedVideo from "../modules/RelatedVideo";

const Game = () =>{
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