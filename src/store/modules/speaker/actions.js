export function storeSpeakerRequest(name, email, vinculo, description) {
    return {
        type: '@speaker/STORE_SPEAKER_REQUEST',
        payload: { name, email, vinculo, description },
    };
}


export function storeSpeakerSuccess() {
    return {
        type: '@speaker/STORE_SPEAKER_SUCCESS',
    }
}


export function storeSpeakerFailure() {
    return {
        type: '@speaker/STORE_SPEAKER_FAILURE'
    } 
}

