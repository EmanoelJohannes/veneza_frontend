import produce from 'immer';

const INITIAL_STATE = {
    loading: false
};

export default function auth (state = INITIAL_STATE, action){
    return produce(state, draft => {
        switch (action.type) {
            case '@event/STORE_EVENT_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@event/STORE_EVENT_SUCCESS': {
                draft.loading = false;
                break;
            }

            case '@event/STORE_EVENT_FAILURE': {
                draft.loading = false;
                break; 
            }

            default:
        }
    });
}