import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
// import api from './../../services/api';

import api from '../../services/api';

import iconSearch from '../../assets/Icon_search.svg';
import iconDetalhar from '../../assets/ic_choices.svg';
import iconExportar from '../../assets/ic_choices.svg';
import iconDividas from '../../assets/ic_xls.svg';
import iconContact from '../../assets/ic_edit.svg';

import {
	Container,
	FilterBar,
	Box,
	Item,
	Resume,
	Tabela,
	Search,
	HeadTable,
} from './styles';

import Loader from '../../styles/loader';

interface checkBoxProps {
	active?: boolean;
	all?: boolean;
	onClick?: any;
}

const BillingDetails: React.FC<checkBoxProps> = ({ active, all, onClick }) => {
	const history = useHistory();
	const [checkList, setChecklist] = useState<number[]>([]);
	const [checkSlip, setCheckSlip] = useState<string[]>([]);
	const [query, setQuery] = useState({
		shopping: '',
		id: '',
		blockStart: '',
		blockEnd: '',
	});
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(Boolean);

	const getQueryStringParams = (queryString: string) => {
		if (!queryString) {
			queryString = window.location.search.substring(1);
		}

		const params: any = {};

		const queries = queryString.split('&');

		queries.forEach((indexQuery: string, index: number) => {
			const indexPair = indexQuery.split('=');

			const queryKey =
				index === 0
					? decodeURIComponent(indexPair[0]).substring(1)
					: decodeURIComponent(indexPair[0]);
			const queryValue = decodeURIComponent(
				indexPair.length > 1 ? indexPair[1] : '',
			);
			params[queryKey] = queryValue;
		});
		return params;
	};

	const handleCheck = (index: number) => {
		const itemOf = checkList.indexOf(index);
		const array = [...checkList];
		if (itemOf === -1) {
			array.push(index);
		} else {
			array.splice(itemOf, 1);
		}
		console.log(array);
		setChecklist(array);
	};

	const handleSlips = async () => {
		const arrayString = [...checkSlip];

		data.bankSlips.map((item: any, index: number) => {
			for (let i = 0; i < checkList.length; i++) {
				if (index === checkList[i]) {
					const res = item.slipIds.join();
					arrayString.push(res);
				}
			}
		});

		let slipId = '';
		arrayString.map((i, index) => {
			if (index !== 0) {
				slipId = `${slipId},${i}`;
			} else {
				slipId += i;
			}
		});

		history.push(
			`/Detalhes-Boletos?slipids=${slipId}&shopping=${query.shopping}&blockStartingDate=${query.blockStart}&cpf=${data?.cpfCnpj}&razaoSocial=${data?.customerName}&classificao=${data?.bankSlips[0].chargingType}`,
		);
	};

	useEffect(() => {
		const params = getQueryStringParams(history.location.search);

		setQuery(params);
	}, []);

	useEffect(() => {
		setLoading(true);
		if (query.id !== '') {
			const handleItem = async () => {
				const response = await api.get(
					`/prioritization/shopping/${query.shopping}/${query.id}?blockStartingDate=${query.blockStart}&blockEndingDate=${query.blockEnd}`,
				);
				console.log(response.data);
				setData(response.data);
				setLoading(false);
			};
			handleItem();
		}
	}, [query]);

	return (
		<>
			{loading ? (
				<div className="loaderUser">
					<Loader />
				</div>
			) : (
				<div className="wrapper">
					<Container>
						<Resume>
							<h2>Dados do Cliente</h2>
							<FilterBar>
								<Box>
									<Item>
										<span>Shopping</span>
										<p>{query.shopping}</p>
									</Item>
									<Item>
										<span>CPF/CNPJ</span>
										<p>{data?.cpfCnpj}</p>
									</Item>
									<Item>
										<span>Razão Social</span>
										<p>{data?.customerName}</p>
									</Item>
								</Box>

								<Box>
									<Item>
										<span>Mês e ano de inadimplência</span>
										<p>{query.blockStart}</p>
									</Item>
									<Item>
										<span>Classificação</span>
										<p>{data?.bankSlips[0].chargingType}</p>
									</Item>
								</Box>
							</FilterBar>
						</Resume>
					</Container>
					<HeadTable>
						<Search>
							<img src={iconSearch} alt="" />
							<input type="text" />
						</Search>
						<button onClick={handleSlips}>
							Exportar <img src={iconExportar} alt="" />
						</button>
						<button onClick={handleSlips}>
							DETALHAR BOLETOS <img src={iconDetalhar} alt="" />
						</button>
						<button onClick={handleSlips}>
							GERAR RELATÓRIO DE DÍVIDAS PARA O CLIENTE{' '}
							<img src={iconDividas} alt="" />
						</button>
						<button onClick={handleSlips}>
							Registrar CONTATO <img src={iconContact} alt="" />
						</button>
					</HeadTable>
					<Tabela>
						<>
							<table>
								<thead>
									<tr>
										<th>
											<input type="checkbox" />
										</th>
										<th>LUC</th>
										<th>Tipo de cobrança</th>
										<th>Marca</th>
										<th>Tipo do Contrato</th>
										<th>Número do contrato</th>
										<th>Status do contrato</th>
										<th>
											Saldo vencido
											<br /> no mês/ano
										</th>
										<th>
											Saldo vencido <br /> total
										</th>
										<th>
											Saldo a vencer
											<br /> no mês/ano
										</th>
										<th>Saldo a vencer total</th>
									</tr>
								</thead>
								<tbody>
									{data?.bankSlips.map((item: any, index: number) => (
										<tr key={index}>
											<td>
												<input
													type="checkbox"
													onClick={() => handleCheck(index)}
												/>
											</td>
											<td>{item.lucs}</td>
											<td>{item.chargingType}</td>
											<td>{item.brand}</td>
											<td>{item.contractType}</td>
											<td>{item.contractNumber}</td>
											<td>{item.contractStatus}</td>
											<td>{item.dueBalanceInMonth}</td>
											<td>{item.totalDueBalance}</td>
											<td>{item.overdueBalanceInMonth}</td>
											<td>{item.totalOverdueBalance}</td>
										</tr>
									))}
								</tbody>
							</table>
						</>
					</Tabela>
				</div>
			)}
		</>
	);
};

export default BillingDetails;
