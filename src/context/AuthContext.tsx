import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';
const qs = require('querystring');

interface AuthState {
	token: string;
	userName: string;
}

interface SignInCredentials {
	username: string;
	password: string;
}

interface AuthContextData {
	userName: string;
	signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>(() => {
		const token = localStorage.getItem('@Siscob:token');
		const userName = localStorage.getItem('@Siscob:userName');
		if (token && userName) {
			return {
				token,
				userName,
			};
		}
		return {} as AuthState;
	});

	const signIn = useCallback(async ({ username, password }) => {
		const requestBody = {
			username,
			password,
		};

		const config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		};
		const response = await api.post(
			'/authenticate',
			qs.stringify(requestBody),
			config,
		);

		const { token } = response.data;
		const userName = response.data.userInfo.username;
		console.log(userName);
		console.log(token);

		localStorage.setItem('@Siscob:token', token);
		localStorage.setItem('@Siscob:userName', userName);

		setData({ token, userName });
	}, []);

	return (
		<AuthContext.Provider value={{ userName: data.userName, signIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
