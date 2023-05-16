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
      },
      title : "WOMEN",
      lnb : ["All", "Modern", "Chic", "Lovely"],
      notetitle : "MAIN NOTE",
      notelnb : ["All", "Citrus", "Floral", "Fruity", "Woody"],
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
      // 카테고리 페이지 타이틀 및 lnb 변경
      chgMenu(dt, pm){
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
        
        // dt.perfumeData[pm].image = dt.perfumeData[pm].image.split("_")[0]+"_"+imgVol
      },
      // 카테고리 페이지의 lnb 클릭 시 해당되는 항목의 향수로 리스트 변경
      chgList(dt, pm){
        let pml = pm.toLowerCase()
        if(pml==="all"){
          // all 클릭 시 전체 아이템 반환
          dt.perfumeData = perfumeListData;
        } else {
          // filter() 사용을 위해 객체를 배열로 변경
          let tempData = Object.keys(perfumeListData).map(item => perfumeListData[item]).filter(x => x.mood.includes(pml));
          dt.perfumeData = tempData;
        }
      },
      // 노트별 분류 상세페이지 lnb 클릭 시 해당되는 항목의 향수로 리스트 변경
      chgNoteList(dt,pm){
        let pml = pm.toLowerCase()
        if(pml==="all"){
          // all 클릭 시 전체 아이템 반환
          dt.perfumeData = perfumeListData;
        } else {
          // filter() 사용을 위해 객체를 배열로 변경
          let tempData = Object.keys(perfumeListData).map(item => perfumeListData[item]).filter(x => x.notes.includes(pml));
          dt.perfumeData = tempData;
        }
      },
      // 향수 상세페이지 구현을 위한 세팅
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