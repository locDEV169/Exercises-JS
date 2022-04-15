// console.time("b6");
function getBooks(authorId) {
    console.log(authorId);
    return new Promise((resolve, reject) => setTimeout(() => resolve(), 10000));
}

function getAuthor(authorId) {
    console.log(authorId);
    return new Promise((resolve, reject) => setTimeout(() => resolve(), 5000));
}

async function getBooksAndAuthor(authorId) {
    const books = getBooks(authorId);
    const author = getAuthor(authorId);
    // return { books, author };
    // const promise = await Promise.allSettled([books, author]);
    // return { books: promise[0], author: promise[1] };
}
console.time("b6");
getBooksAndAuthor(1).then(() => {
    console.timeEnd("b6");
});
