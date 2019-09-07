let initialStage = {
    user: null,
    error: false,
    isLogging: false,
    errorMessgae: null,
    otpResponse: null
}

const user = (state = initialStage, actions) => {
    switch (actions.type) {
        case "LOGIN_FETCHING":
            return { ...state, isLogging: true, user: null }
            break;
        case "LOGIN_FETCHING_SUCCESS":
            return { ...state, isLogging: false, error: false, user: actions.user }
            break;
        case "LOGIN_FETCHING_FAILED":
            return { ...state, isLogging: false, error: true, user: null, errorMessgae: actions.errorMessgae }
            break;
        default:
            return state
    }
}

export default user
