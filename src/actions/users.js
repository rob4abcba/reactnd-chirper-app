export const RECEIVE_USERS = 'RECEIVE_USERS'

//MC: receiveUsers action creator
export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}