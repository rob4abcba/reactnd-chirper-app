export const SET_AUTHED_USER = 'SET_AUTHED_USER'

//MC: setAuthedUser action creator
export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}