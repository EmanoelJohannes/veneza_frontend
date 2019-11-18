export function storeEventRequest(title, subtitle, state, city, local, cep, begin, end) {
    return {
        type: '@event/STORE_EVENT_REQUEST',
        payload: { title, subtitle, state, city, local, cep, begin, end },
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

