export function storeEventRequest(title, subtitle, state, city, local, cep) {
    return {
        type: '@event/STORE_EVENT_REQUEST',
        payload: { title, subtitle, state, city, local, cep },
    };
}


export function storeEventSuccess() {
    return {
        type: '@event/STORE_EVENT_SUCCESS',
    }
}


export function storeEventFailure() {
    return {
        type: '@event/STORE_EVENT_FAILURE'
    } 
}

