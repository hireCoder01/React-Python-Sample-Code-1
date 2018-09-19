export default function(state={}, action){
    console.log(action);

    switch(action.type){
        case 'SEARCH_CARS':
        return { ...state, list:action.payload};
        
        case 'SEARCH_ALL_PHONES':
        return { ...state, list:action.payload};

        case 'PHONE_DETAIL':
        return { ...state,detail:action.payload}

        default:
        return state;
    }

}