import { createStore } from 'redux'
const initialState = {
    text: ''
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case 'UPDATE_TEXT':
            state = {...state,text: action.payload}
            break
        default:
            break
    }
    return state
}

const store = createStore(reducer)

export default store