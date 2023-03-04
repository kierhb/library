const popup = document.querySelector(".popup")
const addBtn = document.querySelector("#add---book")
const closeBtn = document.querySelector(".close-btn")
const submitBtn = document.querySelector("#submit-btn")
const delAllBtn = document.querySelector("#del---all")
const readBtn = document.querySelector("#read-btn")
const saveSession = document.querySelector("#save---session")

let readNum = document.querySelector("#read--num")
let unreadNum = document.querySelector("#unread--num")
let totalNum = document.querySelector("#total--num")

const booksDisplay = document.querySelector(".books-display")

addBtn.addEventListener("click", function() {
    popup.classList.add("active")
})

closeBtn.addEventListener("click", function() {
    popup.classList.remove("active")
})

delAllBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLibrary = []
    booksDisplay.innerHTML = `<p class="empty-library">You're Library is Empty</p>`
    renderBooks()
})


//! Display book Numbers 

function displayNumbers() {
    if (!myLibrary || myLibrary.length === 0 ) {
        readNum.innerText = "Read Books: 0"
        unreadNum.innerText = "Unread Books: 0"
        totalNum.innerText = "Total Books: 0"
    } else {
        totalNum.innerText = `Total Books: ${myLibrary.length}`
        let readTotal = []
        let unReadTotal = []

        for (let i = 0; i < myLibrary.length; i++) {
            let book = myLibrary[i]
            if (book.isRead === true) {
                readTotal.push(book)
            } if (book.isRead === false) {
                unReadTotal.push(book)
            }
        }
        
        readNum.innerText = `Read Books: ${readTotal.length}`
        unreadNum.innerText = `Unread Books: ${unReadTotal.length}`
    }
}


//? Retrieve book information from Local Storage

const booksFromLocalStorage = JSON.parse(localStorage.getItem("myBooks"))

let myLibrary = !booksFromLocalStorage ? [] : JSON.parse(localStorage.getItem("myBooks"))

document.addEventListener("DOMContentLoaded", renderBooks())

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

    saveToLocalStorage()
    renderBooks()
}

submitBtn.addEventListener("click", function() {
    popup.classList.remove("active")

    addBookToLibrary()

    bookCategory.value = ""
    bookTitle.value = ""
    bookAuthor.value = ""
    bookPages.value = ""
    bookIsRead.checked = false
})

function renderBooks() {
    if (!myLibrary || myLibrary.length === 0 ) {
        booksDisplay.innerHTML = `<p class="empty-library">You're Library is Empty</p>`
    } else {
        booksDisplay.innerHTML = ""
        for (let i = 0; i < myLibrary.length; i++) {
            let book = myLibrary[i]
            let bookEl = document.createElement("li")
            bookEl.setAttribute("class", "book--el")
            bookEl.innerHTML = `
            <div class="book--details">
                <h6 id="book---category">${book.category}</h6>
                <h3 id="book---title">${book.title}</h3>
                <h4 id="book---author">by ${book.author}</h4>
                <div id="book---pages">${book.pages} pages</div>
            </div>
            <div class="book--buttons">

                <button id="read-btn" onclick="toggleRead(${i})"><span class="material-symbols-outlined">book</span>
                    ${book.isRead ? "Unread" : "Read" }
                </button>
                <div class="vertical"></div>
                <button id="remove-btn" onclick="removeBook(${i})"><span class="material-symbols-outlined">delete</span>Remove</button>
            </div>
            `
            booksDisplay.appendChild(bookEl)

        }
    }
    displayNumbers()
}

//* Remove Book from Library

function removeBook(index) {
    myLibrary.splice(index, 1)
    saveToLocalStorage()
    renderBooks()
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead
}

function toggleRead(index) {
    myLibrary[index].toggleRead()
    renderBooks()
    saveToLocalStorage()
}

//* Save Session to Local Storage

function saveToLocalStorage() {
    localStorage.setItem("myBooks", JSON.stringify(myLibrary))
}    

