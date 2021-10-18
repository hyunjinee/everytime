import {
	REGISTER_USER,
	LOGIN_USER,
	LOGOUT_USER,
	AUTH_USER
} from '../_actions/user_actions'

export default function user(state = {}, action) {
	switch (action.type) {
		case REGISTER_USER:
			return { ...state, register: action.payload }
			break
		case LOGIN_USER:
			return {...state, loginSuccess: action.payload}
			break
		case LOGOUT_USER:
			return {...state, logoutSuccess: action.payload}
			break
		case AUTH_USER:
			return {...state, userDate: action.payload}
			break
		default:
			return state
	}
}