import React, {useState, useEffect} from "react";
import $ from "jquery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

import {cha_data} from "../data/cha";

import "../css/cha.css"

// function scrollFn(){
//     $(()=>{
//         $(".cha_sliderList:first").addClass("on");
        
//     })
// }

// function ScrollFn(){
//     const moveCharacterList = () => {
//         console.log("scroll")
//     }
    
//     console.log(document.querySelector(".cha_wrap"))


//     useEffect(()=>{
//         window.addEventListener("scroll", moveCharacterList)
//     })

// }

function ChaCircle(props){
    const cCha_data = cha_data[props.cat]
    return(
        <>
            <div className="cha_circle">
                <ul className="cha_circlelist">
                    {
                        cCha_data.map((v,i)=>
                            <li key={i} className={"circle_cookie circle_cookie"+(i+1)} data-index={i}>
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
                                <li key={i} className="cha_sliderList" data-index={i}>
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

    const retVal = (x) => x.getBoundingClientRect().top;

    const rotate = (num, x, y) => {
        let rotateNum = 20 * num;
        x.style.transform = `rotate(-${rotateNum}deg)`;
        y.forEach(ele=>{
            ele.style.transform = `rotate(${rotateNum}deg)`;
        })
    }

    const chgSlide = (obj, num) => {
         // 전체초기화
         obj.forEach((ele)=>{
            ele.classList.remove("on");
        })

        // 해당순번 li에 클래스 넣기
        obj[num].classList.add("on");
    }
    
    // 스크롤 시 캐릭터 이동 메서드 
    const moveCharacterList = () => {
        // 타겟박스
        const chaWrap = document.querySelector(".cha_wrap")
        // sticky 박스
        const chaBx = document.querySelector(".cha_bx");

        const chaCircle =  document.querySelector(".cha_circlelist");

        const chaCircleList = document.querySelectorAll(".circle_cookie")

        let tgpos = retVal(chaWrap)

        let num = 0;
        
        if(tgpos <= -100 && tgpos > -200) {
            num = 1    
        }
        else if(tgpos <= -200 && tgpos > -300) {
            num = 2
        }
        else if(tgpos <= -300 && tgpos > -400) {
            num = 3
        }
        else if(tgpos <= -400 && tgpos > -500) {
            num = 4
        }
        else if (tgpos <= -500) {
            num = 4
        }

        rotate(num, chaCircle, chaCircleList);
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", moveCharacterList)
    })

    return(
        <>
            
            <section id="character">
                <h2 className="cha_tit">CHARACTERS</h2>
                <div className="cha_wrap">
                    <div className="cha_bx">
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
                </div>
            </section>
            {}
        </>
    )
}

export default Cha;