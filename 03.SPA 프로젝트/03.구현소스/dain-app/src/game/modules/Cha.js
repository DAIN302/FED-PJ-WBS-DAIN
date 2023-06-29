import React, {useState, useEffect} from "react";
import $ from "jquery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import ScrollIcon from "./ScrollIcon";
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
                            <li key={i} className={"circle_cookie circle_cookie"+(i+1)} data-index={i}>
                                <figure className="circle_img">
                                    <img src={v.isrc} alt={v.name} />
                                </figure>
                            </li>
                        )
                    }
                </ul>
                <ScrollIcon />
            </div>
        </>
    )
}

function ChaList(props){
    const cCha_data = cha_data[props.cat]
    const voicePlay = (e) => {
        const voiceAudio = document.querySelectorAll(".cha_voice");
        let btnIndex = e.currentTarget.getAttribute("data-index");
        
        voiceAudio.forEach((ele)=>{
            ele.pause();
        })
        voiceAudio[btnIndex].play();
    }

    return(
        <>
            <section className="cha_list">
                <div className="cha_slider">
                    <ul>
                        {
                            cCha_data.map((v,i)=>
                                <li key={i} className="cha_sliderList" data-index={i}>
                                    <div className="cha_border" style={{backgroundImage : v.bgc}}>
                                        <figure className="cha_sliderimg">
                                            <img src={"./images/characters/cat/pot/"+v.ename+".png"}/>
                                        </figure>
                                    </div>
                                    <div className="cha_sliderdesc">
                                        <h4>{v.cat}</h4>
                                        <h3>{v.name}</h3>
                                        <button onClick={voicePlay} className="cha_voicebtn" data-index={i}>
                                            <span>
                                                <FontAwesomeIcon icon={faVolumeLow} style={{color : "#333"}}/>
                                            </span>
                                        </button>
                                        <p>{v.desc}</p>
                                        <div className="cha_slidebtn">
                                            <button className="up">
                                                <span>
                                                    <FontAwesomeIcon icon={faSortUp}/>
                                                </span>
                                            </button>
                                            <button className="down">
                                                <span>
                                                    <FontAwesomeIcon icon={faSortDown}/>
                                                </span>
                                            </button>
                                        </div>
                                        <audio className="cha_voice" src={"./images/characters/cat/audio/"+v.ename+".wav"} />
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
    let tgpos = 0;
    let num = 0;

    const [category, setCategory] = useState("ancient");

    const rotate = (num, x, y) => {
        let rotateNum = 20 * num;
        x.style.transform = `rotate(${rotateNum}deg)`;
        y.forEach(ele=>{
            ele.style.transform = `rotate(-${rotateNum}deg)`;
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

    const retVal = (x) => x.getBoundingClientRect().top;

    const changeCategory = e => {
        let dataType = e.target.getAttribute("data-type")
        const chaWrap = document.querySelector(".cha_wrap")
        setCategory(dataType)
        num = 0;
        tgpos = 0;
        window.scrollTo(0,0)
    }
    
    useEffect(()=>{
        // 타겟박스
        const chaWrap = document.querySelector(".cha_wrap")
            
        const chaCircle =  document.querySelector(".cha_circlelist");
        const chaCircleList = document.querySelectorAll(".circle_cookie")
        const chaList = document.querySelectorAll(".cha_sliderList");

        // 스크롤 시 캐릭터 목록 변환 메서드 
        const moveCharacterList = () => {
            tgpos = retVal(chaWrap)
            const winScroll = window.scrollY;
            const wrapH = chaWrap.clientHeight;
            const scRatio = winScroll / wrapH * 100
            console.log(scRatio)
                   
            num = 0;

            if(scRatio <= 30 && scRatio > 15) {
                num = 1    
            }
            else if(scRatio <= 45 && scRatio > 30) {
                num = 2
            }
            else if(scRatio <= 60 && scRatio > 45) {
                num = 3
            }
            else if(scRatio <= 75 && scRatio > 60) {
                num = 4
            }
            else if (scRatio > 75) {
                num = 4
            }

            rotate(num, chaCircle, chaCircleList);
            chgSlide(chaList, num);
        }

        const slideChgBtn = document.querySelectorAll(".cha_slidebtn button")
        slideChgBtn.forEach(ele=>{
            ele.onclick = (e) => {
                let up = ele.classList.contains("up")
                
                if(up){
                    num--;
                    if(num < 0) return;
                }
                else{
                    num++;
                    if(num > 4) return;
                }

                rotate(num, chaCircle, chaCircleList);
                chgSlide(chaList, num);
            }
        })

        rotate(0, chaCircle, chaCircleList);
        chgSlide(chaList, 0);

        window.addEventListener("scroll", moveCharacterList)
    }, [])

    return(
        <>
            <section id="character">
                <div className="character_bx ibx">
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
                </div>
            </section>
            { }
        </>
    )
}

export default Cha;