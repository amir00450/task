const books = [

    {
        name : "rouge",
        price : "$28.99",
        author : "Mona Awad",
        id : "1"
    }
    ,
    {
        name : "james",
        price : "$25.99",
        author : "Mona Awad",
        id : "2"
    }
    ,
    {
        name : "clear",
        price : "$29.99",
        author : "Mona Awad",
        id : "3"
    }

]
export const getBooks = ()=>{
    return books
}
export const getBook = (id) =>{
    return books.find(book => book.id === id)
}