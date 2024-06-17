const ratingCards = document.querySelectorAll(".rating-cards span");
const submitBtn = document.querySelector(".submit-btn");
const ratePoint = document.getElementById("rate");
const ratingSection =document.querySelector(".rating-section");
const thankSection =document.querySelector(".thank");

let rate = null;

ratingCards.forEach((ratingCards) => {
    ratingCards.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active) {
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked")
        rate = e.target.innerText;
    })
})


submitBtn.addEventListener("click", () => {
    if(rate) {
        ratePoint.innerText = rate;
        ratingSection.classList.add("hidden");
        thankSection.classList.remove("hidden");
    }
    
} )
