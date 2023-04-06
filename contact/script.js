let open = false

function menu(){
  if(open == false){
    open = true
    document.getElementById("popup-close").style.display = "block";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("popup-open").style.display = "none";
  }else{
    open = false
    document.getElementById("popup-close").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("popup-open").style.display = "block";
  }
}
