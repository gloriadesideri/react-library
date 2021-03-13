import React, {useEffect, useState} from "react";
import BookCard from "./BookCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "../../actions/SearchActions";

function Books({books, totalItems}) {
    const currentIndex=useSelector(state=>state.index)
    const [index, setIndex]=useState(0)
    const [remaining, setRemaining]=useState(0);
    const disp=useDispatch()

    function loadMore() {
        setIndex(currentIndex.index)
        disp(fetchBooks(books.query,currentIndex.index))

    }
    useEffect(()=>{
        setIndex(currentIndex.index)
        if(books)
            setRemaining(totalItems-index)
    },[currentIndex])

    return(
        <section className="text-gray-600 body-font bg-gray-300 lg:min-height-full  h-full  w-full ">
            <div className=" px-5 py-24 mx-auto h-full">
                <div className="flex flex-wrap h-full -m-4">
                    
                    {

                      books[0] &&  books.map(bookArray=>{
                          return(bookArray.items.map(book=>{
                              return (
                                  <BookCard author={book.volumeInfo.authors} name={book.volumeInfo.title} img={book.volumeInfo.imageLinks}  id={book.id}/>
                              )
                          }) )

                        })
                    }

                    {
                        books && <button className={remaining>0 ? '': 'hidden'}  onClick={loadMore} >Load more</button>

                    }
                </div>

            </div>
        </section>
    )
}

export default Books
