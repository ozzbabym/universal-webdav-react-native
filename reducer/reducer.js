export default (state, { type, payload }) => {
    switch (type) {

    case 'SET_DATA':
        return { ...state, data: payload}

    default:
        return state
    }
}
