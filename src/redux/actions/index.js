import { ACCOUNTTYPE, } from '../types/index'


export const set_account_type = payload => {
    return {
        type: ACCOUNTTYPE,
        payload: payload
    }
}
