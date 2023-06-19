import React from "react";

import fdata from "../data/features";
import "../css/features.css"

function Features(){
    return(
        <>
            <section className="features">
                <div className="features_header">
                    <div className="features_split">FEATURES</div>
                    <div className="features_split">FEATURES</div>
                </div>
                <div className="features_cont">
                    {
                        fdata.map((v,i)=>
                            <div key={i}>
                                <h3 className="features_tit">{v.tit}</h3>
                                {
                                    v.desc.split("^").map((v,i)=>
                                        <p key={i} className="features_desc">{v}</p>
                                    )
                                }
                                <div className="features_vidbx">
                                    <img src={"./images/media/"+v.psrc}/>
                                    <video src={"./images/media/"+v.vsrc} autoPlay muted playsInline loop/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Features;