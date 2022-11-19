const initialState = {
    userId: null,
    email: null,
    username: null,
    isLoggedIn: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                userId: action.payload.userId,
                email: action.payload.email,
                username: action.payload.username,
                isLoggedIn: true,
            };
        case 'USER_LOGOUT':
            return {
                ...state,
                userId: null,
                email: null,
                username: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};