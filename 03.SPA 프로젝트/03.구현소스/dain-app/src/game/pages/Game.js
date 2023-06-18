import React from "react";

import VideoIntro from "../modules/VideoIntro";
import Overview from "../modules/Overview";
import Story from "../modules/Story";
import VideoTrailer from "../modules/VideoTrailer";

const Game = () =>{
    return (
        <>
            <VideoIntro />
            <Overview />
            <Story />
            <VideoTrailer />
        </>
    )
}

export default Game;