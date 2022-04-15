// function getBookById(id) {
//     console.log("get book id", id);
//     return author_id;
// }

// function getAuthorById(id) {
//     console.log("get Author id");
//     return id;
// }
async function getAuthors(bookIds) {
    const authors = [];

    // const promise = await Promise.all(
    //     bookIds.map(async (id) => {
    //         await getBookById(id).then((books) => {
    //             return getAuthorById(books.authorId);
    //         });
    //     })
    // );

    // authors.push(promise)
    await Promise.all(
        bookIds.map(async (id) => {
            await getBookById(id).then((books) => {
                return getAuthorById(books.authorId);
            });
        })
    );

    console.log(authors);
    return authors;
}
async function getAuthors(bookIds) {
    const authors = [];

    const promise = await Promise.all(
        bookIds.map(async (id) => {
            await getBookById(id).then((books) => {
                return getAuthorById(books.authorId);
            });
        })
    );

    authors.push(promise)

    console.log(authors);
    return authors;
}
const ids = [1, 2, 3, 4];
console.time("b5");
getAuthors(ids).then(() => {
    console.timeEnd("b5");
});
