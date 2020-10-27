import axios from 'axios';

const api = axios.create({
	baseURL: 'https://bff-siscob-hml.integracao.brmalls.com.br',
});

export default api;
