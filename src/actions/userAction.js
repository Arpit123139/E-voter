import { LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    CLEAR_ERRORS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    TOKEN_USER_REQUEST,
    TOKEN_USER_SUCCESS,
    TOKEN_USER_FAIL,
} from "../constants/userConstant";

import axios from 'axios';

//login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST});

        const config = { headers: {"Content-Type" : "application/json"}};

        const {data} = await axios.post(
            `/api/user/signIn`,
            {email, password},
            config
        );
        localStorage.setItem('token',data.token);
        localStorage.setItem('user', data.user?._id);
        localStorage.setItem('userName',data.user?.name);
        localStorage.setItem('userImage',data.user?.url)
        dispatch({type: LOGIN_SUCCESS, payload: data.user});
        
    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload: error.response.data.message});
    }
}

//register
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_USER_REQUEST});

        const config = { headers: {"Content-Type" : "application/json"}};

        const {data} = await axios.post(`/api/user/signUp`, userData, config);

        dispatch({type: REGISTER_USER_SUCCESS, payload: data.user});
        
    } catch (error) {
        dispatch({type: REGISTER_USER_FAIL, payload: error.response.data.message})
    }
}

export const token =  (email, password) => async (dispatch) => {
    try {
        dispatch({type: TOKEN_USER_REQUEST});

        const config = { headers: {"Content-Type" : "application/json"}};

        const {data} = await axios.post(
            `/api/user/signIn`,
            {email, password},
            config
        );

        localStorage.setItem('token',data.token);
        localStorage.setItem('user', data.user?._id);
        localStorage.setItem('userName',data.user?.name);
        localStorage.setItem('userImage',data.user?.url)
        dispatch({type: TOKEN_USER_SUCCESS, payload: data.token});
        
    } catch (error) {
        dispatch({type: TOKEN_USER_FAIL, payload: error.response.data.message});
    }
}

//Clearing Errors
export const clearErrors = () => async (dispatch)=>{
    dispatch({type: CLEAR_ERRORS});
}