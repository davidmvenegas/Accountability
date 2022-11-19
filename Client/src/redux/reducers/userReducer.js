const initialState = {
    userId: null,
    email: null,
    isLoggedIn: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                userId: action.payload.userId,
                email: action.payload.email,
                isLoggedIn: true,
            };
        case 'USER_LOGOUT':
            return {
                ...state,
                userId: null,
                email: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};