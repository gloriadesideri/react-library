import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import {useDispatch} from 'react-redux'
import {fetchBooks, resetBooks, resetQuery, setLoading} from "../../actions/SearchActions";
import queryBuilder from "./helper";
function SearchForm() {
    const disp=useDispatch();
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [publisher,setPublisher]=useState('');

    const handleSubmit = e => {
        e.preventDefault()
        disp(resetBooks())
        disp(resetQuery(''))

        disp(fetchBooks(queryBuilder(title,author,publisher),0))
    }
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter title" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" alue={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Enter author" />
                </Form.Group>
            </Form.Row>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control alue={publisher} onChange={(e)=>setPublisher(e.target.value)} placeholder="Enter publisher" />
                </Form.Group>



            <Button variant="primary" type="submit">
                Search
            </Button>




        </Form>
    )
}

export default SearchForm
