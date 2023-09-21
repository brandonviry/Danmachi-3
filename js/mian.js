
const choix =(ep,ch)=>{

    for(const val in ep){
        document.querySelector("#E"+ep[val]).style.display ="none";
    }
    document.querySelector("#E"+ch).style.display ="block";
}


const ep =["01","02","03","04","05","06","07","08","09","10","11","12","13","14"]


choix(ep,ep[0])

ep.map((elt)=>{
    document.querySelector("#episode"+elt).addEventListener("click",(event)=>{
        choix(ep,elt)
      
    })
})



