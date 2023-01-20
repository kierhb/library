const popup = document.querySelector(".popup")
const addBtn = document.querySelector("#add-btn")
const closeBtn = document.querySelector("#close-btn")
const submitBtn = document.querySelector("#submit--btn")

const ulEl = document.querySelector(".ul-el");

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

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//* Retrieve book info
function getBookInfo() {
    const title = bookTitle.value
    const author = bookAuthor.value
    const pages = bookPages.value
    const isRead = bookRead.checked
    return new Book(title, author, pages, isRead)
}

function addBookToLibrary() {
    getBookInfo()
    myLibrary.push(getBookInfo())
}


submitBtn.addEventListener("click", function() {
    addBookToLibrary()
    render(myLibrary)
    popup.classList.remove("active")
})

function render(library) {
    let bookItems = ""
    for (let i = 0; i < library.length; i++) {
        bookItems += `
            <li class="book-el">
                <h3 id="title">${library[i].title}</h3>
                <h4 id="author">by ${library[i].author}</h4>
                <div id="pages">${library[i].pages} pages</div>
                <button id="read-btn">Read</button>
                <button id="remove-btn">Remove</button>
            </li>
        `
    }
    ulEl.innerHTML = bookItems
}

//* Add functionalities on book buttons
const readBtn = document.querySelector("#read-btn")
const removeBtn = document.querySelector("#remove-btn")

readBtn.addEventListener("click", function() {
    console.log("read clicked!")
})

removeBtn.addEventListener("click", function() {
    console.log("remove clicked!")
})


