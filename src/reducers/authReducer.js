export const authReducer = (state, action) => {
    switch (action.type) {

        case 'LOGIN_SUCCESS':
            return { ...state, user: action.payload.user, role: action.payload.role, isLoggedIn: true };
        case 'LOGOUT':
            return { ...state, user: null, role: null, isLoggedIn: false };
        case 'SET_ROLE':
            return { ...state, role: action.payload.role }
        default:
            return state;
    }
};


