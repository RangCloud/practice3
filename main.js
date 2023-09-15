const submitBtn = document.getElementById("submitButton");
const thankBox = document.querySelector(".thankYouBox");
const numberSelect = document.querySelector(".numBtn");

submitBtn.addEventListener("click", submitFn);
numberSelect.addEventListener("click", numSelectFn);

function submitFn() {
    thankBox.style.display = "block";
};

function numSelectFn(){

}
