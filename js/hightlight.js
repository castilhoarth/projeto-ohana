function setActivePage(pageName){

    var tudo = document.getElementById("header")
    var links = tudo.getElementsByClassName(pageName);
    console.log(links);
    if (links[0].className == pageName){
        if (links[0].classList.contains("active")){
            console.log("ta ativado");
        }
        else {
            links[0].classList.add("active");
        }
        
    }
}


