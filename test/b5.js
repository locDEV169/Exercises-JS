function getBookById(id) {
    console.log("get book id", id);
    return id;
}
function getAuthorById(id) {
    console.log("get Author id", id);
    return id;
}
async function getAuthors(bookIds) {
    const authors = [];
    const books = [];
    for (const id of bookIds) {
        const book = await getBookById(id);
        const author = await getAuthorById(book.authorId);
        authors.push(author);
    }

    console.log(authors);
    return authors;
}

const id = [1, 2, 3, 4];
console.time("b5");
getAuthors(id).then(() => {
    console.timeEnd("b5");
});
// solution tách function
// baseApi = (url, call_back_function) : axios.get('url')
//                 .then((response)=>{
//                     call_back_function(response)
//                 })

// const function_call_api_author_call_back = async (value){
//    Api.baseApi(url, add_author_after_call_api)
// }

// const function_call_api_book = async(value){
//   Api.baseApi(url, function_call_api_author_call_back)
// }

// const [author, setAuthor] = useState([])

// const add_author_after_call_api(author_id){
//   let get_author = [...author]
//   get_author.push(author_id)
//   setAuthor(getAuthor)
// }

// for(const id in bookIds ){
//   function_call_api_book(id)
// }

// async function getAuthors(bookIds) {
//     const authors = [];
//     const promises = bookIds.map(async (id) => {
//         const book = await getBookById(id);
//         return book;
//     });
//     const books = await Promise.all(promises);

//     const promises1 = books.map(async (i) => {
//         const author = await getAuthorById(i);
//         return author;
//     });
//     authors = await Promise.all(promises1);
//     console.log(authors);
// }
// const ids = [1, 2, 3, 4];
// console.time("b5");
// getAuthors(ids).then(() => {
//     console.timeEnd("b5");
// });
