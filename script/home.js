const root = "/";

function init(){
    initHead();
    initArticle();
}

function initHead(){
    var head_a = document.createElement("a");
    head_a.setAttribute("href", root);
    head_a.textContent = "<BetMul>"

    var head = document.createElement("h1");
    head.appendChild(head_a);

    var header = document.getElementById("header");
    header.appendChild(head);
}

function initArticle(){
    var newslist = document.getElementById("newslist");
    
}

function readFiles(file){
    
    
}

function readPath(){
    
}

init();