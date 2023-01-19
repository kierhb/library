const popup = document.querySelector(".popup")
const addBtn = document.querySelector("#add-btn")
const closeBtn = document.querySelector("#close-btn")
const submitBtn = document.querySelector("#submit--btn")

addBtn.addEventListener("click", function() {
    popup.classList.add("active")
})

closeBtn.addEventListener("click", function() {
    popup.classList.remove("active")
})

/*
submitBtn.addEventListener("click", function() {
    popup.classList.remove("active")
}) 
*/
let myLibrary = []

const bookTitle = document.querySelector("#book--title")
const bookAuthor = document.querySelector("#book--author")
const bookPages = document.querySelector("#book--pages")
const bookRead = document.querySelector("#book--checkbox")

bookRead.addEventListener("click", function() {
    if (bookRead.checked) {
        bookRead.value = true
    } else {
        bookRead.value = false
    }
    console.log(bookRead.value)
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

