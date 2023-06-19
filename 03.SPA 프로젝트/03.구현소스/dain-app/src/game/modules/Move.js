import React from "react";

import "../css/move.css"

function Move(){
    const season = ["spring","summer","autumn","winter"]
    return(
        <>
            <section className="kingdom_bg">
                <div className="buildings">
                    {
                        season.map((v,i)=>
                            <div className="building" key={i}>
                                <figure className="building_img">
                                    <img src={"./images/buildings/"+v+".webp"} alt="건물"/>
                                </figure>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Move;