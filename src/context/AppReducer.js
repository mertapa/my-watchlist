export default (state,action) => {
    switch(action.type){
        case "ADDD_MOVIE_TO_WATCHLIST":
            return{
                ...state,
                watchlist:[...state.watchlist, action.payload],
            };
            default:
                return state;
    }
};