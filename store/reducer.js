const initState = {
    timer: "00:00:00:00",
    lap: [],
    isTimerStarted: false,
    initial: true
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_STATE':
            return{
                ...state,
                [action.payload.key]: action.payload.value
            }
            
            
    
        default:
            return state;
            
    }
    
}

export default reducer;