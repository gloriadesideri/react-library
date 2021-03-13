import React from 'react'

function BookCard({img, name, id, author}) {

    return(
        <div className="p-4 w-1/2 h-1/2">
            <div className=" border-2 border-white h-full  rounded-lg ">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center " src={img ? img.smallThumbnail : "https://dummyimage.com/720x400"}
                     alt="blog"/>
                    <div className="p-4">
                        <p className=" text-sm font-medium text-gray-900   text-left text-truncate">{name}</p>
                       {author && <p className=" text-sm font-medium text-gray-900   text-left text-truncate">{author.map(author=>{
                            return author
                        })}</p>}


                        <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={`/books/${id}`} target='_blank'>Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                     fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>


                        </div>
                    </div>
            </div>
        </div>
    )
}
export default BookCard
