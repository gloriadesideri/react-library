
const spread = (str) => {
    if (!str)
        return str
    let split = str.split(" ")
    let result = ''
    split.forEach(word => {
        result += word + '%20'
    })
    result = result.slice(0, -3);
    return result;

}
 function queryBuilder(title,author,publisher) {
    let query = ''

    if (title) {
        query +='+intitle:'+ spread(title)
    }
    if (author) {
        query += '+inauthor:' + spread(author)
    }
    if (publisher) {
        query += '+inpublisher:' + spread(publisher)
    }
    console.log(query)

    return query.trim()

}

export default queryBuilder
