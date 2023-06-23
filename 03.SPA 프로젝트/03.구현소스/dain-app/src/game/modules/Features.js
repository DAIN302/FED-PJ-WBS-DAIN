import React, { useEffect } from "react";

import fdata from "../data/features";
import "../css/features.css"

function Features(){
    useEffect(()=>{

    })

    return(
        <>
            <section className="features">
                <div className="features_header">
                    <div className="features_titbx">
                        <div className="features_splitwrap">
                            <div className="features_bg"></div>
                            <div className="features_cont">
                                {
                                    fdata.map((v,i)=>
                                        <div key={i} className="features_contbx">
                                            <h3 className="features_tit features_action">{v.tit}</h3>
                                            {
                                                v.desc.split("^").map((v,i)=>
                                                    <p key={i} className="features_desc features_action">{v}</p>
                                                )
                                            }
                                            <div className="features_vidbx">
                                                <img src={"./images/media/"+v.psrc}/>
                                                <video className="features_video" src={"./images/media/"+v.vsrc} autoPlay muted playsInline loop/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="features_splitwrap2">
                            <div className="features_split features_split1">FEATURES</div>
                            <div className="features_split features_split2">FEATURES</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;