import {all, takeLatest, call, put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import api from '../../../services/api';
import { storeEventSuccess, storeEventFailure } from './actions';


export function* storeEvent({payload}){
    try {
        const {title, subtitle, state, city, local, cep, begin, end} = payload;

        const response = yield call (api.post, 'storeEvent', {title, subtitle, state, city, local, cep, begin, end});

        toast.success('Evento criado com sucesso');

        yield put(storeEventSuccess(response.data));

    } catch (err) {
        toast.error('Erro ao criar ao evento!');
        console.tron.log(err, payload);
        yield put(storeEventFailure());
    }
}

export default all([
    takeLatest('@event/STORE_EVENT_REQUEST', storeEvent)
]);