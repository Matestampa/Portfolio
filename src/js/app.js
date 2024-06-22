


let element=document.getElementsByTagName("id")[0];
let id=element.innerText
console.log(id)

element=document.getElementsByClassName(`${id}-hd`)[0]
element.classList.add("navLink_hovered");