const popup = document.querySelector(".popup")
const addBtn = document.querySelector("#add-btn")
const closeBtn = document.querySelector("#close-btn")
const submitBtn = document.querySelector("#submit--btn")
const delAllBtn = document.querySelector("#del-all-btn")

const ulEl = document.querySelector(".ul-el");

delAllBtn.addEventListener("click", function() {
    localStorage.clear()
    myLibrary = []
    ulEl.innerHTML = ""
    render()
})

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

const booksFromLocalStorage = JSON.parse(localStorage.getItem("myBooks"))

let myLibrary = !booksFromLocalStorage ? [] : JSON.parse(localStorage.getItem("myBooks"))

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
    localStorage.setItem("myBooks", JSON.stringify(myLibrary))
}

submitBtn.addEventListener("click", function(event) {
    addBookToLibrary()
    render()
    popup.classList.remove("active")
    event.preventDefault()
    
    bookTitle.value = ""
    bookAuthor.value = ""
    bookPages.value = ""
    bookRead.checked = false
})


function render() {
    const myBooks = JSON.parse(localStorage.getItem("myBooks"))
    const readBtn = document.querySelectorAll("#read-btn")
    

    let bookItems = ""

    myBooks.map(book => {
        bookItems += `
            <li class="book-el">
                <h3 id="title">${book.title}</h3>
                <h4 id="author">by ${book.author}</h4>
                <div id="pages">${book.pages} pages</div>
                ${book.read ? 
                    `<button id="unread-btn">Unread</button>` : 
                    `<button id="read-btn" onclick="readBook()">Read</button>`}
                <button id="remove-btn">Remove</button>
            </li>
        `
        ulEl.innerHTML = bookItems
    });

    const removeBtn = document.querySelectorAll("#remove-btn")
    removeBtn.addEventListener("click", removeBook())
    
    function removeBook() {
        console.log("removed!")
    }
    

}

render()

removeBook()