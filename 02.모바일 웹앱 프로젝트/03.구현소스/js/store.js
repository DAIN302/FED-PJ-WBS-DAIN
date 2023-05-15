// 스토어 JS
import { perfumeListData } from "./data/perfumeData.js";
import {street, formal, elegant, modern, chic, lovely} from "./data/moodData.js"

const store = new Vuex.Store({
    state : {
      // perfumeStreet : {...street.street, ...street.lovely},
      // perfumeFormal : {...formal.formal, ...formal.elegant, ...formal.modern},
      // perfumeElegant : {...elegant.elegant, ...elegant.modern, ...elegant.chic},
      // perfumeModern : {...formal.modern, ...elegant.modern, ...modern},
      // perfumeChic : {...elegant.chic, ...chic},
      // perfumeLovely : {...street.lovely, ...modern, ...lovely},
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
      namekor : "",
      nameeng : "",
      brand : "",
      volume : [],
      price : [],
      notes : [],
      note : {
        top : "",
        middle : "",
        base : ""
      },
      desc :[],
      story : [],
      image : "",
      br : "",
    },
    mutations : {
      chgMenu(dt, pm){
        // location.href = "category.html"
        dt.title = dt.lnbData[pm].title
        dt.lnb = dt.lnbData[pm].lnb
      },
      // 용량 클릭 시 이미지 변경
      chgVolume(dt, pm){
        // 이미지 변경
        dt.image = dt.perfumeData[pm].image
        // 경로 변경
        dt.br = dt.perfumeData[pm].br
        // 클릭 시 이미지 변경
        let imgVol = event.currentTarget.innerText.split("ml")[0].trim()
        dt.perfumeData[pm].image = dt.perfumeData[pm].image.split("_")[0]+"_"+imgVol
      },
      chgList(dt, pm){
        let pml = pm.toLowerCase()
        if(pml==="all"){
          // all 클릭 시 전체 아이템 반환
          dt.perfumeData = perfumeListData;
          console.log(pml)
        } else {
          let tempData = Object.keys(perfumeListData).map(item => perfumeListData[item]).filter(x => x.mood.includes(pml));
          let tempData2 = Object.assign({}, tempData);
          dt.perfumeData = tempData;
          console.log(tempData)
        }
      },
      chgProduct(dt, pm){
        dt.image = dt.perfumeData[pm].image
        dt.br = dt.perfumeData[pm].br
        dt.namekor = dt.perfumeData[pm].namekor
        dt.nameeng = dt.perfumeData[pm].nameeng
        dt.brand = dt.perfumeData[pm].brand
        dt.volume = dt.perfumeData[pm].volume
        dt.price = dt.perfumeData[pm].price
        dt.notes = dt.perfumeData[pm].notes
        dt.note["top"] = dt.perfumeData[pm].note["top"]
        dt.note["middle"] = dt.perfumeData[pm].note["middle"]
        dt.note["base"] = dt.perfumeData[pm].note["base"]
        dt.desc = dt.perfumeData[pm].desc
        dt.story = dt.perfumeData[pm].story
      }
    },
})    

export default store;