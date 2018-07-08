
const initialState = {
    isLogin: false,
    user: {
        id: null,
        name: null,
        foto: null,
        saldo: null,
        point: null,
    }
}

export function reducer(state = initialState,action) {
    switch (action.type) {
        case 'login':
                return {
                    isLogin: true,
                    user : action.data
                }
            break;
        case 'logout':
                return {
                    isLogin: false,
                    user: {
                        id: null,
                        name: null,
                        foto: null,
                        saldo: null,
                        point: null,
                    }
                }
            break;
        default:
                return state;
            break;
    }
}