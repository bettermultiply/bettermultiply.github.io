const root = "/"

function init(){
    initHead();
    initArticle();
}

function initHead(){
    var head_a = document.createElement("a");
    head_a.setAttribute("href", root);
    head_a.textContent = "<BetterMul>"

    var head = document.createElement("h1");
    head.appendChild(head_a);

    const header = document.getElementsByTagName("header");
    header[0].appendChild(head);
}

function initArticle(){
    var newslist = document.getElementById("newslist");
    
}

function readFiles(file){
    
    
}

function readPath(){
    
}