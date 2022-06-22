export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: ' BQDOG7qyr6buWPJNq5tCPga-nPwSGCevhwfGDXCw7ZgssjDFktb8qItNUiYdiy6EgKi2tj2vQgdGvy1xja40ROD0FDp-RmRUoU7PZdcWgT5iSC-YonjpcHp1kXpIWhbUqD9Xhb7XA4w1dp9-q3oe1Fh7uSXAe5oI5gbUCdnNXO7CbzwX0V6dGS9PEtj_arrvggQvotDPU53hmcwMig',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;