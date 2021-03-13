import React from 'react'
import SearchForm from "./SearchForm";
import Books from "../Books";
import {useSelector} from "react-redux";

function Body() {
    const books= useSelector(state=>state.books);

    return(
        <div className='Body'>
            <section className="text-gray-600 body-font md:h-full ">
                <div className="lg:w-full lg:h-full lg:mx-auto lg:flex md:p-0  lg:flex-row md:flex-col   lg:align-items-start  ">
                    <div className="  lg:w-1/2 lg:flex lg:flex-col px-24 py-24 sm:px-12 sm:text-sm lg:items-center align-center   lg:text-left " >
                        <div className='lg:sticky top-14 lg:mt-8 '>
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to React-Library</h1>
                            <p className="mb-8 leading-relaxed">This project is powered by React, React router, React redux, Tailwind css and React Bootstrap </p>
                            <div className="lg:flex lg:w-full lg:justify-start md:justify-center items-end text-left">
                                <SearchForm/>
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-1/2  bg-gray-300 lg:min-h-screen md:min-h-screen h-full p-0">
                      {  books && <Books books={books.books ? books.books : []} totalItems={books.books[0] ? books.books[0].totalItems: 0}/>}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Body
