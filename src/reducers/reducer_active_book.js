//State argument is not application state, only state
//this reducer is responsible for
export default function(state = null, action) {
    //Base case to handle actions that don't apply to this reducer
    //Just return the state that was passed in.

    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }







    return state

}