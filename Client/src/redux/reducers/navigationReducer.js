const initialState = {
    location: 'HOME_SCREEN',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'HOME_SCREEN':
            return {
                ...state,
                location: 'HOME_SCREEN',
            };
        case 'YOUR_TASKS_SCREEN':
            return {
                ...state,
                location: 'YOUR_TASKS_SCREEN',
            };
        case 'PARTNER_TASKS_SCREEN':
            return {
                ...state,
                location: 'PARTNER_TASKS_SCREEN',
            };
        case 'PARTNER_SCREEN':
            return {
                ...state,
                location: 'PARTNER_SCREEN',
            };
        case 'SETTINGS_SCREEN':
            return {
                ...state,
                location: 'SETTINGS_SCREEN',
            };
        case 'NOTIFICATIONS_SCREEN':
            return {
                ...state,
                location: 'NOTIFICATIONS_SCREEN',
            };
        default:
            return state;
    }
};