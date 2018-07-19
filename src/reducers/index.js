import * as types from '../constants/ActionTypes'
export default (state = [0,0,0], action) => {
    switch (action.type){
        case types.INCREMENT:
        {
            const newState = [...state]
            newState[action.index]++
            return newState
        }
        case types.DECREMENT:
        {
            const newState = [...state]
            newState[action.index]--
            return newState
        }
        case types.MULTIPLE:
        {
            const newState = [...state]
            newState[action.index] *= action.multiple
            return newState
        }
        case types.DELAY:
        {
            const newState = [...state]
            newState[action.index]++
            return newState
        }
        //case types.DELAY:
        // {
        //     const newState = [...state]
        //     setTimeout(()=>{newState[action.index]++},2000)
        //     return newState
        // }
        default:
            return state
    }
}