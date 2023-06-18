import React, {useState} from "react";
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
                                            <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M.473 20.899L20.1 1.27l19.628 19.628-19.628 19.628L.473 20.9z" stroke="#FFF3CD" strokeWidth="0.5"></path><path clipRule="evenodd" d="M37.66 26.238L24.886 39.014a8.938 8.938 0 00-9.602-.033L2.35 26.047a8.927 8.927 0 00-.307-9.99L14.705 3.396a8.924 8.924 0 0010.64-.151l12.74 12.74a8.935 8.935 0 00-.424 10.254z" stroke="#FFF3CD" strokeWidth="0.5"></path><path d="M22 13l-5 4h-4v6h4l5 4V13zM26.54 16.46a5 5 0 010 7.07" stroke="#FFF3CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
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
        </>
    )
}

export default Cha;