const submitBtn = document.getElementById("submitButton");
const thankBox = document.querySelector(".thankYouBox");
const numberSelect = document.querySelector(".numBtn"); // 숫자 누를 때
const numberCheck = document.getElementById("selectNumber"); // 숫자 결과

submitBtn.addEventListener("click", submitFn);

function submitFn() {
    thankBox.style.display = "block";
};

numberSelect.addEventListener('click', ()=>{
    document.style.backgroundColor = "hsl(217, 12%, 63%)";
    document.style.color = "white";
})