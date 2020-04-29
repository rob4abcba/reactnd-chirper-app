export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

//MC: receiveTweets action creator
export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}