//declare:
let number1 = Math.ceil(Math.random() * 10);
let number2 = Math.ceil(Math.random() * 10);
let correctNum = number1 * number2;

//get element:
let questionEl = document.querySelector("#question");
let scoreEl = document.querySelector("#score");
let inputEl = document.querySelector("#input");
let formEl = document.querySelector("#form");
console.log(questionEl, scoreEl, inputEl, formEl);

//add question in HTML
let score = JSON.parse(localStorage.getItem("score")); // lay gia tri tu localStorage
if (!score) {
    score = 0; // xu li cho lan lay ban dau
}
scoreEl.innerText = `score: ${score}`;
questionEl.innerText = `${number1} * ${number2} = ? `;

//handle listener from user
formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value; //get text from user by text box
    console.log(userAns);
    if (userAns === correctNum) {
        score++;
        localStorage.setItem("score", JSON.stringify(score));
    }
    else {
        localStorage.setItem("score", JSON.stringify(score));
    }
})

