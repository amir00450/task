import { useParams } from "react-router-dom";
import {getBook} from "../data/data"

const Book = () =>{
    const params= useParams()
    const book= getBook(params.BookId)
    if(book){
        return(
            <div className="book" style={{padding: "2rem"}}>
                <p> name : {book.name}</p>
                <p> price :{book.price}</p>
                <p> author :{book.author}</p>
            </div>
        )
    }else{
        return(
            <div>
                این کتاب وجود ندارد
            </div>
        )
    }
}
export default Book;