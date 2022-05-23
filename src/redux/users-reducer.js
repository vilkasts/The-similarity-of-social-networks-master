const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
        users: [
            {id: 1, photoUrl: "https://kremlinpalace.org/images/events/1604567585.jpg",
                followed: true, fullName: 'Kolyunya', status: 'On vacation', location: {city: 'Tbilisi', country: 'Georgia' }},
            {id: 2, photoUrl: "https://kremlinpalace.org/images/events/1604567585.jpg",
                followed: false, fullName: 'Vitechka', status: 'Good boy', location: {city: 'Erevan', country: 'Armenia' }},
            {id: 3, photoUrl: "https://kremlinpalace.org/images/events/1604567585.jpg",
                followed: false, fullName: 'Oleksey', status: 'Little kitty', location: {city: 'Gdansk', country: 'Poland' }},
            {id: 4, photoUrl: "https://kremlinpalace.org/images/events/1604567585.jpg",
                followed: true, fullName: 'Volodenka', status: 'Bad guy', location: {city: 'Pinsk', country: 'Belarus' }}
        ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};

        default:
            return state;
    }
};

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;