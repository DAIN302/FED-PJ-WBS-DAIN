import React from "react";
import $ from "jquery"

import {cha_data} from "../data/cha";

import "../css/cha.css"

function ChaCircle(props){
    const cCha_data = cha_data[props.cat]
    return(
        <>
            <div className="cha_circle">
                <ul className="cha_circlelist">
                    {
                        cCha_data.map((v,i)=>
                            <li key={i}>
                                <figure className="circle_img">
                                    <img src={v.isrc} alt={v.name} />
                                </figure>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

function Cha(){
    return(
        <>
            <section id="character">
                <div className="cha_wrap">
                    {/* hooks를 사용해서 버튼 클릭 시 cat 바뀌게 변경할 예정 */}
                    <ChaCircle cat="ancient"/>
                </div>
            </section>
        </>
    )
}

export default Cha;