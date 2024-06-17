document.getElementById("title-dom").innerHTML="hello DOM!";
console.log(document.getElementById("title-dom"))
// getElementById-це метод пошуку елемента по id 
// innerHTML-це властивість що дозволяе отримати або замінити вміст будь-якого елемента HTML 
let element = document.getElementsByTagName("p");
console.log(element[0].innerHTML="Olexa")

document.getElementsByClassName("header_list-item")[2].innerHTML="history";
let element_selector = document.querySelectorAll(".header_list-items")
console.log(element_selector)
element_selector[0].innerHTML="olexa_two"
document.getElementById("dom").class="new_dom"
console.log(document.getElementById("dom").class="new_dom")
document.getElementById("dom").classList.add("dom_new")





