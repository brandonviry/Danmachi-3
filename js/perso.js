const lis = document.querySelectorAll("li")
let name =["bell","hestia","eina","welf","freya","loki","ais","bete","liliruca","syr","ryu","anya","chloe"]
let i = 0

lis.forEach((elt)=>{
    let n =name[i]
    elt.addEventListener('click' , (event)=>{
        document.querySelector("#img").src ="https://danmachi.com/danmachi/images/character-popup-data-"+n+".png"

    })
   
    i+=1

})