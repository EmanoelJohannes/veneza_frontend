import {all, takeLatest, call, put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import api from '../../../services/api';
import { storeSpeakerSuccess, storeSpeakerFailure } from './actions';

console.tron.log("Saga ok 2");

export function* storeSpeaker({payload}){
    console.tron.log("Saga ok");
    try {
        const {name, email, vinculo, description} = payload;

        const response = yield call (api.post, 'storeSpeaker', {name, email, vinculo, description});

        toast.success('Palestrante enviado com sucesso');

        yield put(storeSpeakerSuccess(response.data));

    } catch (err) {
        toast.error('Erro ao criar ao palestrante!');
        console.tron.log(err, payload);
        yield put(storeSpeakerFailure());
    }
}

export default all([
    takeLatest('@speaker/STORE_SPEAKER_REQUEST', storeSpeaker)
]);