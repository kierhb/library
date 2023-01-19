let myLibrary = []

const bookTitle = document.querySelector("#book--title")
const bookAuthor = document.querySelector("#book--author")
const bookPages = document.querySelector("#book--pages")
const bookRead = document.querySelector("#book--checkbox")


bookRead.addEventListener("change", function() {
    console.log(bookRead.value)
})

const booksFromLocalStorage = JSON.parse(localStorage.getItem("myBooks"))

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookDetails() {

}

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
    myLibrary.push(newBook)
    console.log(myLibrary)
}

const popup = document.querySelector(".popup")
const addBtn = document.querySelector("#add-btn")
const closeBtn = document.querySelector("#close-btn")
const submitBtn = document.querySelector("#submit--btn")

addBtn.addEventListener("click", function() {
    popup.classList.add("active")
})

close.addEventListener("click", function() {
    popup.classList.remove("active")
})

submitBtn.addEventListener("click", function(event) {
    event.preventDefault()
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
    console.log(newBook)

    //popup.classList.remove("active")
})

