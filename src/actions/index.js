export default function selectBook(book) {
    //console.log("A book has been selected", book.title);

    //selectBook is an action creator, it needs to return an action
    // which is an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}