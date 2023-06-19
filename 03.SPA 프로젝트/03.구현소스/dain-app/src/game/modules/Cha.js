import React, {useState} from "react";
import $ from "jquery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

import {cha_data} from "../data/cha";

import "../css/cha.css"

function scrollFn(){
    $(()=>{
        $(".cha_sliderList:first").addClass("on");
        
    })
}

function ChaCircle(props){
    const cCha_data = cha_data[props.cat]
    return(
        <>
            <div className="cha_circle">
                <ul className="cha_circlelist">
                    {
                        cCha_data.map((v,i)=>
                            <li key={i} className={"circle_cookie"+(i+1)}>
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

function ChaList(props){
    const cCha_data = cha_data[props.cat]

    return(
        <>
            <section className="cha_list">
                <div className="cha_card">
                    <img src="./images/characters/cat/card.png"/>
                </div>
                <div className="cha_slider">
                    <ul>
                        {
                            cCha_data.map((v,i)=>
                                <li key={i} className="cha_sliderList">
                                    <figure className="cha_sliderimg">
                                        <img src={"./images/characters/cat/pot/"+v.ename+".png"}/>
                                    </figure>
                                    <div className="cha_sliderdesc">
                                        <h4>{v.cat}</h4>
                                        <h3>{v.name}</h3>
                                        <button>
                                            <span>
                                                <FontAwesomeIcon icon={faVolumeLow} style={{color : "#FFF3CD"}}/>
                                            </span>
                                        </button>
                                        <p>{v.desc}</p>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

function Cha(){
    const catBtn = [
        {
            type : "ancient",
            name : "영웅쿠키"
        },
        {
            type : "brave",
            name : "용감한 쿠키와 친구들"
        },
        {
            type : "legend",
            name : "전설쿠키"
        },
        {
            type : "villain",
            name : "악당쿠키"
        },
    ]

    const [category, setCategory] = useState("ancient");

    const changeCategory = e => {
        let dataType = e.target.getAttribute("data-type")
        setCategory(dataType)
    }

    return(
        <>
            <section id="character">
                <h2 className="cha_tit">CHARACTERS</h2>
                <div className="cha_wrap">
                    <section className="cha_btn">
                        <ul>
                            {
                                catBtn.map((v,i)=>
                                    <li key={i}>
                                        <button data-type={v.type} onClick={changeCategory}>{v.name}</button>
                                    </li>
                                )
                            }
                        </ul>
                    </section>
                    <ChaCircle cat={category}/>
                    <ChaList cat={category}/>
                </div>
            </section>
            {scrollFn()}
        </>
    )
}

export default Cha;