import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import event from './event/sagas';
import speaker from './speaker/sagas';

export default function* rootSaga(){
    return yield all([auth, user, event, speaker]);
}