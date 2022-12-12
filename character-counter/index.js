//declare
var total = 0;
var remaining = 0;

//get element
const textareaEl = document.querySelector("#textarea");
const totalEl = document.querySelector("#counter--total"); //update
const remainEl = document.querySelector("#counter--remaining");

//handle

//listener user input
textareaEl.addEventListener("keyup", () => {
    updateTotal();
    updateRemain();
    console.log(total, remaining);

})

function updateTotal () {
    total = textareaEl.value.length;
    totalEl.innerText = total;
}

function updateRemain() {
    remaining = textareaEl.getAttribute("maxLength") - total;
    remainEl.innerText = remaining
}

