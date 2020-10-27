import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';
import store from './store';

export default function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</BrowserRouter>
			<GlobalStyle />
		</Provider>
	);
}
