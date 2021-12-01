import { combineReducers } from "redux";

const allNewsReducer = (allNews=null, action) => {
    if(action.type = 'FETCH_POSTS'){
        console.log('reducers', action.payload)
        // console.log(getst)
        return {
            // bbc: action.payload.bbc,
            // gizmodo: action.payload.gizmodo
        }
    }
    return allNews;
}

export default combineReducers({
   allNews: allNewsReducer
});