// 스토어 JS
import { perfumeListData } from "./data/perfumeData.js";

const store = new Vuex.Store({
    state : {
      perfumeData : perfumeListData,
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
      men : true,
      women : true
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
        
      }
    
    },
})    

export default store;