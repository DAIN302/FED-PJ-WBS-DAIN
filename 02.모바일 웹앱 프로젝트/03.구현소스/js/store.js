// 스토어 JS
import { perfumeListData } from "./data/perfumeData.js";
import {street, formal, elegant, modern, chic, lovely} from "./data/moodData.js"

const store = new Vuex.Store({
    state : {
      perfumeData : perfumeListData,
      perfumeStreet : street,
      lnbData : {
        "women" : {
          title : "WOMEN",
          lnb : ["All", "Modern", "Chic", "Lovely"]
        },
        "men" : {
          title : "MEN",
          lnb : ["All", "Street", "Formal", "Elegant"]
        },
        "note" : {
          title : "MAIN NOTE",
          lnb : ["All", "Citrus", "Floral", "Fruity", "Woody"]
        },
      },
      title : "WOMEN",
      lnb : ["All", "Modern", "Chic", "Lovely"],
      image : "",
      br : "",
    },
    mutations : {
      // 용량 클릭 시 이미지 변경
      chgVolume(dt, pm){
        dt.image = dt.perfumeData[pm].image
        dt.br = dt.perfumeData[pm].br
        let imgVol = event.currentTarget.innerText.split("ml")[0].trim()
        dt.perfumeData[pm].image = dt.perfumeData[pm].image.split("_")[0]+"_"+imgVol
      },
      chgList(dt, pm){
        let pml = pm.toLowerCase()
        if(pml==="all"){
          // all 클릭 시 전체 아이템 반환
          dt.perfumeData = dt.perfumeData
          console.log(pml)
        } else {
          dt.perfumeData = dt.perfumeData
        }
        
        
      }
    
    },
})    

export default store;