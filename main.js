const submitBtn = document.getElementById("submitButton");
const thankBox = document.querySelector(".thankYouBox");
const numberSelect1 = document.getElementById("btn1"); // 1숫자 누를 때
const numberSelect2 = document.getElementById("btn2"); // 2숫자 누를 때
const numberSelect3 = document.getElementById("btn3"); // 3숫자 누를 때
const numberSelect4 = document.getElementById("btn4"); // 4숫자 누를 때
const numberSelect5 = document.getElementById("btn5"); // 5숫자 누를 때
const numberCheck = document.getElementById("selectNumber"); // 숫자 결과

submitBtn.addEventListener("click", submitFn);
numberSelect1.addEventListener("click", numSelectFn1);
numberSelect2.addEventListener("click", numSelectFn2);
numberSelect3.addEventListener("click", numSelectFn3);
numberSelect4.addEventListener("click", numSelectFn4);
numberSelect5.addEventListener("click", numSelectFn5);

function submitFn() {
    thankBox.style.display = "block";
};

function numSelectFn1() {
    numberSelect1.style.backgroundColor = "hsl(217, 12%, 63%)";
    numberSelect1.style.color = "white";
    numberCheck.innerHTML = "1";
}
function numSelectFn2() {
    numberSelect2.style.backgroundColor = "hsl(217, 12%, 63%)";
    numberSelect2.style.color = "white";
    numberCheck.innerHTML = "2";
}
function numSelectFn3() {
    numberSelect3.style.backgroundColor = "hsl(217, 12%, 63%)";
    numberSelect3.style.color = "white";
    numberCheck.innerHTML = "3";
}
function numSelectFn4() {
    numberSelect4.style.backgroundColor = "hsl(217, 12%, 63%)";
    numberSelect4.style.color = "white";
    numberCheck.innerHTML = "4";
}
function numSelectFn5() {
    numberSelect5.style.backgroundColor = "hsl(217, 12%, 63%)";
    numberSelect5.style.color = "white";
    numberCheck.innerHTML = "5";
}