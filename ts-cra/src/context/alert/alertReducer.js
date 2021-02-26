import { ALERT_TOGGLE } from "../types"

const handlers = {
    [ALERT_TOGGLE]: (state, {payload}) => ({...payload}),
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const func = handlers[action.type] || handlers.DEFAULT
    return func(state, action)
}