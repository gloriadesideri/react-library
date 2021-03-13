import React, {useEffect, useState} from 'react'
import axios from "axios";

function BookView({match}) {
     const [book,setBook]=useState([]);
     const[stars,setStars]=useState([0,0,0,0,0])
    const[image, setImage]=useState('')

     useEffect(()=>{
         axios.get(`https://www.googleapis.com/books/v1/volumes/${match.params.bookId}`).then(res=>{


             setBook(book=>res.data);
         }).catch(e=>{
             console.log(e)
         })
     },[])

    useEffect(()=>{
        if(book.volumeInfo){
            let newStars=[]
            for(let i=0;i<book.volumeInfo.ratingsCount; i++){
                newStars.push(1)

            }
            for(let i=0;i<5-book.volumeInfo.ratingsCount; i++){
                newStars.push(0)
            }
            setStars(stars=>newStars)
            setImage(book.volumeInfo.imageLinks.thumbnail)
        }
    },[book])



return(
    <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
         {book.volumeInfo &&   <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full  h-1/2 object-cover object-center rounded"
                     src={image? image :"https://dummyimage.com/400x400"}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl text-left title-font font-medium mb-1">{book.volumeInfo.title}</h1>
                        <div className="flex mb-4">
          <span className="flex items-center">
              {stars.map(item=>{
                  if(item===1){
                      return(
                          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                               stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                              <path
                                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                      )

                  }else{
                      return (
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                               className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                              <path
                                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                      )
                  }
              })}

          </span>
                        </div>
                        <p className="leading-relaxed text-left">{book.volumeInfo.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3"><b>Pages</b>: {book.volumeInfo.pageCount}</span>

                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3"><b>Author{book.volumeInfo.authors.length>1?'s':''}:</b> {book.volumeInfo.authors.map(author=>{
                                    return author
                                })}</span>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="mr-3"><b>Publisher: </b>{book.volumeInfo.publisher}</span>

                        </div>
                    </div>
            </div>}
        </div>
    </section>
)
}

export default BookView
