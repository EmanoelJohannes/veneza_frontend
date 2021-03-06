import produce from 'immer';

const INITIAL_STATE = {
    loading: false
};

export default function speaker (state = INITIAL_STATE, action){
    return produce(state, draft => {
        switch (action.type) {
            case '@speaker/STORE_SPEAKER_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@speaker/STORE_SPEAKER_SUCCESS': {
                draft.loading = false;
                break;
            }

            case '@speaker/STORE_SPEAKER_FAILURE': {
                draft.loading = false;
                break; 
            }

            default:
        }
    });
}