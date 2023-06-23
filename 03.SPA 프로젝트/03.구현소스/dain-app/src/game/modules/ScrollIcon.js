import React from "react";

import "../css/scrollicon.css"

function ScrollIcon() {
    return (
        <>
            <div className="mouse-wrap">
                <div className="mouse">
                    <div className="frame">
                        <svg
                            version="1.1"
                            id="mouse"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 54.9 91"
                            style={{enableBackground :'new 0 0 54.9 91'}}
                            xmlSpace="preserve"
                        >
                            <path
                                id="XMLID_173_"
                                className="st0"
                                linejoin="round"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                d="M27.4,3.6L27.4,3.6C14.2,3.6,3.5,14.3,3.5,27.5v36c0,13.2,10.7,23.9,23.9,23.9h0
                                c13.2,0,23.9-10.7,23.9-23.9v-36C51.4,14.3,40.7,3.6,27.4,3.6z"
                            />
                        </svg>
                    </div>

                    <div className="mouse-left">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 27.4 91"
                            style={{enableBackground : "new 0 0 27.4 91"}}
                            xmlSpace="preserve"
                        >
                            <path
                                linejoin="round"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                className="Draw-Frame Animate-Draw"
                                d="M27.4,87.5L27.4,87.5c-13.2,0-23.9-10.7-23.9-23.9v-36c0-13.2,10.7-23.9,23.9-23.9h0"
                            />
                        </svg>
                    </div>

                    <div className="mouse-right">
                        <svg
                            version="1.1"
                            id="Layer_2"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 27.4 91"
                            style={{enableBackground:"new 0 0 27.4 91"}}
                            xmlSpace="preserve"
                        >
                            <path
                                linejoin="round"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                className="Draw-Frame Animate-Draw"
                                d="M0,3.6L0,3.6c13.2,0,23.9,10.7,23.9,23.9v36c0,13.2-10.7,23.9-23.9,23.9h0"
                            />
                        </svg>
                    </div>
                </div>
                <p className="mouse_text">Scroll</p>
            </div>
        </>
    );
}

export default ScrollIcon;
