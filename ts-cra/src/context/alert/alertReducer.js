import { ALERT_TOGGLE } from "../types"

const helper = {
    [ALERT_TOGGLE]: (state, {payload}) => ({...payload}),
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const func = helper[action.type] || helper.DEFAULT
    return func(state, action)
}