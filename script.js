var menuicon = document.getElementById("menui-item");
var list = document.getElementById("list");
var menuistatus;

menuicon.onclick = function() {
   if(menuistatus == "closed"){
    menuicon.src = "img/incorrect.png"
    list.style.display = "block"
    menuistatus = "open";
   }
   else{
    menuicon.src = "img/menu.png"
    list.style.display = "block"
    menuistatus = "closews"
   }
}
