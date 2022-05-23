import React from "react";
import Users from "./Users"
import { useDispatch, useSelector } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";



let UsersContainer = () => {

    let state = useSelector(state => state).usersPage;
    let dispatch = useDispatch();

    let follow = (id) => {
        dispatch(followAC(id));
    };

    let unfollow = (id) => {
        dispatch(unfollowAC(id));
    };

    let setUsers = (users) => {
        dispatch(setUsersAC(users));
    };

    return <Users users={ state.users }
                  follow={ follow }
                  unfollow={ unfollow }/>
}



export default UsersContainer;


