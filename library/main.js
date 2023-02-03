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



//? Retrieve book information and save to localStorage

let myLibrary = []

const bookCategory = document.querySelector("#category")
const bookTitle = document.querySelector("#title")
const bookAuthor = document.querySelector("#author")
const bookPages = document.querySelector("#pages")
const bookIsRead = document.querySelector("#checkbox")

function Book(category, title, author, pages, isRead) {
    this.category = category
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function getBookInfo() {
    const bkCategory = bookCategory.value
    const bkTitle = bookTitle.value
    const bkAuthor = bookAuthor.value
    const bkPages = bookPages.value
    const bkIsRead = bookIsRead.checked
    return new Book(bkCategory, bkTitle, bkAuthor, bkPages, bkIsRead)
}

function addBookToLibrary() {
    getBookInfo()
    myLibrary.push(getBookInfo())
}

submitBtn.addEventListener("click", function() {
    popup.classList.remove("active")

    addBookToLibrary()
    console.log(myLibrary)
})