import {all, takeLatest, call, put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import api from '../../../services/api';
import { storeEventSuccess, storeEventFailure } from './actions';


export function* storeEvent({payload}){
    console.log("Entrou store event, payload.data ->",payload.data);
    try {
        const response = yield call (api.post, 'storeEvent', payload.data);

        console.log("Response -> ",response);

        toast.success('Evento criado com sucesso');

        yield put(storeEventSuccess(response.data));

    } catch (err) {
        toast.error('Erro ao criar ao evento!');

        yield put(storeEventFailure());
    }
}

export default all([
    takeLatest('@event/STORE_EVENT_REQUEST', storeEvent)
]);