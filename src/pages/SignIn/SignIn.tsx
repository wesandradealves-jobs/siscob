import React, { useCallback, useContext, useRef, useEffect } from 'react';

import { Form } from '@unform/web';

import { Container, Content } from './styles';
import { AuthContext } from './../../context/AuthContext';

import InputText from '../../components/InputText';

import FormGroup from '@material-ui/core/FormGroup';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface State {
  username: string;
  password: string;
  showPassword: boolean;
  keepConnected: boolean;
}

const SignIn: React.FC = () => {
	const { signIn } = useContext(AuthContext);

	const brmalls = require('../../assets/brmalls.svg');
	const logo = require('../../assets/logo_siscob2.svg');

	const [state, setState] = React.useState<State>({
		username: '',
		password: '',
		keepConnected: false,
		showPassword: false,
	});		

	const handleChangeKeepConnected = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, keepConnected: !state.keepConnected });
	};	

	const handleChangeFormData = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setState({ ...state, showPassword: !state.showPassword });
	};

	const handleSubmit = () => {
		signIn({
			username: state.username,
			password: state.password,
		});
	}

	return (
		<Fade in={true} timeout={1000}>
			<Container>
				<Content>
					<Form className="form" onSubmit={handleSubmit}>
						<h1>Insira seus dados para acessar o sistema</h1>

						<FormGroup className="input" row>
				          <InputLabel htmlFor="username">Usuário</InputLabel>
				          <Input
				            id="username"
				            placeholder="Digite seu nome de usuário"
				            name="username"
				            value={state.username}
				            onChange={handleChangeFormData('username')}
				            type="text"
				          />	
				        </FormGroup>							

						<FormGroup className="input" row>
				          <InputLabel htmlFor="password">Senha</InputLabel>
				          <Input
				            id="password"
				            placeholder="Digite sua senha"
				            name="password"
				            value={state.password}
				            type={state.showPassword ? 'text' : 'password'}
				            onChange={handleChangeFormData('password')}
				            endAdornment={
				              <InputAdornment position="end">
				                <IconButton
				                  aria-label="toggle password visibility"
				                  onClick={handleClickShowPassword}
				                >
				                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
				                </IconButton>
				              </InputAdornment>
				            }
				          />							
						</FormGroup>

						<FormGroup className="keepConnected" row>
							<Checkbox 
							value={state.keepConnected}
							checked={state.keepConnected} 
							onChange={handleChangeKeepConnected} 
							name="keepConnected" />
							<label>Continuar conectado</label>
						</FormGroup>


						<button type="submit">Entrar</button>
					</Form>
					<div> 
						<img src={logo} />
						<h2>Bem-vindo ao<br/>Sistema de Cobrança</h2>
					</div>				
				</Content>
				<img className="brmallsLogo" src={brmalls} alt="" />
			</Container>
		</Fade>
	);
};

export default SignIn;
