
export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
            break;
        
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );
            break;


        default:
            return initialState;
            break;
    }
}