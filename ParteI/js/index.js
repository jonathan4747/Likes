let like = document.querySelector(".like")
let num = document.querySelector(".numlikes")
let count = 3
function likes(elemento){
    count ++;
    console.log("click");
    num.innerText = count+" Like(s)"
}