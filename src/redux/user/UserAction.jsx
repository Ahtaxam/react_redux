import { FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST  } from "./UserType";
import axios from 'axios';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
    }

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
    }

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
    }


const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
            dispatch(fetchUsersFailure(error.message));
        })
    }
}




export { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, fetchUsers };