window.addEventListener("load",function(){
    let tabs = document.querySelectorAll(".shopping .slide-tabs li")
    let tabCont= document.querySelectorAll(".shopping .slide-wrap")
    for(let i = 0; i < tabs.length; i++)
    {
        tabs[i].onclick = function(){
            for(let j = 0; j < tabs.length; j++){
                tabs[j].classList.remove("active")
                tabCont[j].classList.remove("active")
            }
            this.classList.add("active")
            tabCont[i].classList.add("active")
        }
    }
})