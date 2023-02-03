const popup = document.querySelector(".popup")
const addBtn = document.querySelector("#add---book")
const closeBtn = document.querySelector(".close-btn")
const submitBtn = document.querySelector("#submit-btn")
const delAllBtn = document.querySelector("#del---all")

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
})

//! Display book Numbers 

let numRead = 0
let numUnread = 0
let numTotal = 0

function displayNumbers() {


}


//? Retrieve book information and save to localStorage

const booksFromLocalStorage = JSON.parse(localStorage.getItem("myBooks"))

let myLibrary = !booksFromLocalStorage ? [] : JSON.parse(localStorage.getItem("myBooks"))
renderBooks()

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
    localStorage.setItem("myBooks", JSON.stringify(myLibrary))
}

submitBtn.addEventListener("click", function() {
    popup.classList.remove("active")

    addBookToLibrary()
    renderBooks()

    bookCategory.value = ""
    bookTitle.value = ""
    bookAuthor.value = ""
    bookPages.value = ""
    bookIsRead.checked = false
})


function renderBooks() {
    const myBooks = JSON.parse(localStorage.getItem("myBooks"))

    let bookCards = ""

    if (!myBooks) {
        booksDisplay.innerHTML = `<p class="empty-library">You're Library is Empty</p>`
    } else {
        myBooks.map(book => {
            bookCards += `
                <li class="book--el">
                    <div class="book--details">
                        <h6 id="book---category">${book.category}</h6>
                        <h3 id="book---title">${book.title}</h3>
                        <h4 id="book---author">by ${book.author}</h4>
                        <div id="book---pages">${book.pages} pages</div>
                    </div>
                    <div class="book--buttons">
                        ${book.isRead ? 
                            `<button id="read-btn"><span class="material-symbols-outlined">book</span>Unread</button>` : 
                            `<button id="read-btn"><span class="material-symbols-outlined">book</span>Read</button>`
                        }
                        <div class = "vertical"></div>
                        <button id="remove-btn"><span class="material-symbols-outlined">delete</span>Remove</button>
                    </div>
                </li>
            `
            booksDisplay.innerHTML = bookCards
        })
    }
}