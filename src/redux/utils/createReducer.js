export default (initialState) => (reducerCases) => (state = initialState, action) => {
    let reducer = reducerCases[action.type]
    return reducer ? reducer(state, action) : state
}