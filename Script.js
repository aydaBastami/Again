// const bio = {
//     firstName: "Ayda",
//     // lastName: "Bastami",
//     age: 20,
// }

// // ES6

// const {firstName: first, lastName= "Bs"} = bio;
// console.log(first, lastName);

let newH1 = document.createElement("h1")
newH1.innerHTML = "la casa de papel"
document.body.prepend(newH1)
newH1.style.color = "white"
newH1.style.backgroundColor = "red"
newH1.style.textAlign = "center"
newH1.style.fontFamily = "Courier New"

let newimg = document.createElement("img")
newimg.setAttribute("src", "berlin-in-money-heist-pedro-alonso-la-casa-de-papel.webp")
document.body.append(newimg)
newimg.style.borderRadius = "50%"
newimg.style.textAlign = "center"
newimg.style.width = "400px"
newimg.style.height = "480px"


let AllTagA = document.querySelectorAll("a")
for (let a  of AllTagA) {
    a.style.fontFamily = "Gill Sans"
    a.style.fontSize = "30px"
    a.style.color = "white"
    a.style.backgroundColor = "black"
    a.style.textAlign = "center"
    a.style.textDecorationLine = "none"
    a.style.padding = "3px"
}
console.log(AllTagA);
// console.log(AllTagA.nextSibling)
// console.log(AllTagA.nextElementSibling)
// console.log(AllTagA.previousSibling)
// console.log(AllTagA.previousElementSibling)


Allspan = document.querySelector("p")
Allspan.innerHTML = "Tokyo"

// console.log(Allspan);
// console.log(Allspan.nextSibling)
// console.log(Allspan.nextElementSibling)
// console.log(Allspan.previousSibling)
// console.log(Allspan.previousElementSibling)
// console.log(Allspan.parentElement.parentElement.parentElement);




