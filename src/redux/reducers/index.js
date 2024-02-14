import { ACCOUNTTYPE, } from '../types/index'
const intialState = {
    account_type: '',
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ACCOUNTTYPE: {
            return {
                ...state,
                account_type: action.payload,
            }
        }
        default:
            return state
    }
}
export default reducer;