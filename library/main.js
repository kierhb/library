const addBook = document.querySelector("#add---book")
const closeBtn = document.querySelector(".close-btn")
const submitBtn = document.querySelector("#submit-btn")
const popup = document.querySelector(".popup")


addBook.addEventListener("click", function() {
    popup.classList.add("active")
})

closeBtn.addEventListener("click", function() {
    popup.classList.remove("active")
})

submitBtn.addEventListener("click", function() {
    popup.classList.remove("active")
})