let modal = document.getElementById("modal1");
let btn = document.getElementById("Details1Knop");
let span = document.getElementsByClassName("close")[0];

let richtlijnenData = `[{
    "title": "oooooo",
    "text": "aaaaaa"
},{
    "title": "ppppppp",
    "text": "kkkkkkk"
}]`

btn.onclick = function (){
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

console.log(richtlijnenData);

// function fillRichtlijnen() {
//     let title = document.getElementById('title');
//     title.innerText = richtlijnenData;
//
// }
// const { elements } = document.querySelector('div')
//
// for (const [ key, value ] of Object.entries(data) ) {
//     const field = elements.namedItem(key)
//     field && (field.value = value)
// }

