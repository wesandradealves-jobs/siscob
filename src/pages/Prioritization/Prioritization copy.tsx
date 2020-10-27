import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import {
	FilterBar,
	TabMenu,
	TabItem,
	TabContent,
	Search,
	SelectArea,
	SelectAreaTemp,
	Dpicker,
	Label,
	DateArea,
	InputArea,
	RadioArea,
	Flex,
	Pagination,
	TableContainer,
} from './Prioritization.styles';

import Loader from './../../styles/loader';

import api from './../../services/api';

import 'react-datepicker/dist/react-datepicker.css';

import DefaultButton from './../../components/DefaultButton';
import Select from './../../components/Select';
import InputText from './../../components/InputText';
import Radio from './../../components/Radio';

export const Prioritization: React.FC = () => {
	const history = useHistory();
	const [lucState, setLucState] = useState('');
	const [companyState, setCompanyState] = useState('');
	const [contractState, setContractState] = useState('');
	// const [billingGroupState, setBillingGroupState] = useState('');
	const [tendencieState, setTendencieState] = useState('');
	const [shoppingState, setShoppingState] = useState('NORTESHOPPING');
	const [startDate, setStartDate] = useState(new Date());
	const [startDateFrom, setStartDateFrom] = useState(new Date());
	const [startDateTo, setStartDateTo] = useState(new Date());
	const [isTabActive, setIsTabActive] = useState(1);
	const [listShopping, setListShopping] = useState<any[]>([]);
	const [listTendencia, setListTendencia] = useState<any[]>([]);
	const [page, setPage] = useState([0]);
	const [loading, setLoading] = useState(Boolean);

	const handleOnClickItem = (
		id: number,
		blockStart: string,
		blockEnd: string,
	) => {
		history.push(
			`/Boletos?id=${id}&blockStart=${blockStart}&blockEnd=${blockEnd}`,
		);
	};

	const handleChange = (
		event: React.ChangeEvent<unknown>,
		value: number,
		index: number,
	) => {
		const newPage = [...page];
		newPage[index] = value - 1;
		setPage(newPage);
	};

	const countPages = (total: number) => {
		const pages = total / 20;
		return Math.ceil(pages);
	};
	useEffect(() => {
		const countP = listShopping.length;

		const tables = [];

		for (let i = 0; i < countP; i++) {
			tables.push(0);
		}
		setPage(tables);
	}, []);

	const handleTab = (item: number) => {
		setIsTabActive(item);
		setListShopping([]);
		setListTendencia([]);
	};

	const reqApi = async () => {
		setLoading(true);
		var month = startDate.getMonth() + 1 + '';
		var year = startDate.getFullYear() + '';
		const response = await api.get(
			`/prioritization/shopping/NORTESHOPPING?month=${month}&year=${year}&showFourthBlock=false`,
		);

		setListShopping(response.data);
		setLoading(false);
	};

	const reqTend = async () => {
		setLoading(true);

		var dayFrom = ('0' + startDateFrom.getDate()).slice(-2);
		var monthFrom = ('0' + (startDateFrom.getMonth() + 1)).slice(-2);
		var yearFrom = startDateFrom.getFullYear() + '';

		var dayTo = ('0' + startDateTo.getDate()).slice(-2);
		var monthTo = ('0' + (startDateTo.getMonth() + 1)).slice(-2);
		var yearTo = startDateTo.getFullYear() + '';

		const company = companyState ? `&companyName=${companyState}` : '';
		const luc = lucState ? `&LUC=${lucState}` : '';
		const contract = contractState ? `&contractType=${contractState}` : '';
		const tendencie = tendencieState ? `&tendencies=${tendencieState}` : '';

		const response = await api.get(
			`/prioritization/slip-tendency?shoppingName=${shoppingState}&dateFrom=${yearFrom}-${monthFrom}-${dayFrom}&dateTo=${yearTo}-${monthTo}-${dayTo}${company}${luc}${contract}${tendencie}`,
		);

		setListTendencia(response.data.data);
		console.log(response.data.data);
		setLoading(false);
	};

	const reqApiCorp = async () => {
		var month = startDate.getMonth() + 1 + '';
		var year = startDate.getFullYear() + '';

		const response = await api.get(
			`/prioritization/billing-group?groupIds=37&month=${month}&year=${year}&showFourthBlock=false`,
		);
		setListShopping(response.data);
	};

	const shoplist = [
		{
			value: 'NORTESHOPPING',
			label: 'Norte Shopping',
		},
		{
			value: 'TIJUCA',
			label: 'Tijuca',
		},
	];

	return (
		<>
			<div className="wrapper">
				<FilterBar>
					<TabMenu>
						<TabItem onClick={() => handleTab(1)} active={isTabActive === 1}>
							Por shopping
						</TabItem>
						<TabItem onClick={() => handleTab(2)} active={isTabActive === 2}>
							Por portfólio
						</TabItem>
						<TabItem onClick={() => handleTab(3)} active={isTabActive === 3}>
							Ajuste de tendência
						</TabItem>
					</TabMenu>
					<TabContent active={isTabActive === 1}>
						<Search>
							<SelectArea>
								<Label>Shopping</Label>
								<Select options={shoplist} />
							</SelectArea>
							<DateArea>
								<Label>Mês e ano de inadimplência</Label>
								<Dpicker
									selected={startDate}
									onChange={(date: any) => setStartDate(date)}
									dateFormat="MM/yyyy"
									showMonthYearPicker
								/>
							</DateArea>
						</Search>
						<DefaultButton onClick={reqApi} />
					</TabContent>

					<TabContent active={isTabActive === 2}>
						<Search>
							<SelectArea>
								<Label>Portfólio de cobrança</Label>
								<Select options={shoplist} />
							</SelectArea>
							<DateArea>
								<Label>Mês e ano de inadimplência</Label>
								<Dpicker
									selected={startDate}
									onChange={(date: any) => setStartDate(date)}
									dateFormat="MM/yyyy"
									showMonthYearPicker
								/>
							</DateArea>
						</Search>
						<div>
							<DefaultButton onClick={reqApiCorp} />
						</div>
					</TabContent>

					<TabContent active={isTabActive === 3}>
						<Search>
							<SelectAreaTemp>
								<Label>Shopping</Label>

								<select
									required
									onChange={e => setShoppingState(e.target.value)}
								>
									<option value="NORTESHOPPING">NorteShopping</option>
									<option value="TIJUCA">Tiijuca</option>
								</select>
							</SelectAreaTemp>

							<DateArea>
								<Label>Período (Data da negociação para pagamento)</Label>
								<Flex>
									<span>De</span>
									<Dpicker
										required
										dateFormat="yyyy/MM/dd"
										selected={startDateFrom}
										onChange={(date: any) => setStartDateFrom(date)}
									/>
									<span>Até</span>
									<Dpicker
										required
										dateFormat="yyyy/MM/dd"
										selected={startDateTo}
										onChange={(date: any) => setStartDateTo(date)}
									/>
								</Flex>
							</DateArea>

							<SelectAreaTemp>
								<Label>Grupo de cobrança</Label>
								<select>
									<option value="NORTESHOPPING">NorteShopping</option>
									<option value="TIJUCA">Tiijuca</option>
								</select>
							</SelectAreaTemp>
						</Search>
						<Search>
							<InputArea>
								<Label>Razão Social</Label>
								<input
									name="razao"
									placeholder="Digite a razão social."
									onChange={e => setCompanyState(e.target.value)}
								/>
							</InputArea>

							<InputArea>
								<Label>LUC</Label>
								<input
									name="luc"
									width="200"
									placeholder="Digite a LUC"
									onChange={e => setLucState(e.target.value)}
								/>
							</InputArea>

							<SelectAreaTemp>
								<Label>Tipo de contrato</Label>
								<select onChange={e => setContractState(e.target.value)}>
									<option value="LOJA">LOJA</option>
									<option value="MALL">MALL</option>
								</select>
							</SelectAreaTemp>
							<RadioArea>
								<Label>Tendência</Label>
								<input
									type="radio"
									value="true"
									name="tendencia"
									onChange={e => setTendencieState(e.target.value)}
								/>
								<label>Sim</label>
								<input
									type="radio"
									value="false"
									name="tendencia"
									onChange={e => setTendencieState(e.target.value)}
								/>
								<label>Não</label>
							</RadioArea>
							<DefaultButton onClick={reqTend} />
						</Search>
					</TabContent>
				</FilterBar>
				{loading ? (
					<div className="loaderUser">
						<Loader />
					</div>
				) : (
					<TableContainer>
						{listShopping.map((item, index) => (
							<div key={index}>
								<h1>{item.month}</h1>
								<table>
									<thead>
										<tr>
											<th>Prioridade</th>
											<th>Razão Social</th>
											<th>Nome fantasia</th>
											<th>CPF/CNPJ</th>
											<th>Situção</th>
											<th>
												Saldo vencido
												<br />
												no mês/ano
											</th>
											<th>
												Saldo vencido <br />
												total
											</th>
											<th>
												Saldo a vencer
												<br />
												no mês/ano
											</th>
											<th>
												Saldo a vencer
												<br />
												total
											</th>

											<th>Último contato</th>
										</tr>
									</thead>
									<tbody>
										{[...item.data].splice(page[index] * 20, 20).map(d => (
											<tr
												key={d.cpfCnpj}
												onClick={() =>
													handleOnClickItem(
														d.customer,
														item.blockStartingDate,
														item.blockEndingDate,
													)
												}
											>
												<td width="3%">{d.priority}</td>
												<td width="6%">{d.customerName}</td>
												<td width="7%">{d.brand}</td>
												<td width="5%">{d.cpfCnpj}</td>
												<td width="12%">{d.status}</td>

												<td width="11%">
													R$
													{d.overdueBalanceInMonth.toLocaleString('pt-BR')}
												</td>
												<td width="12%">
													R$ {d.totalOverdueBalance.toLocaleString('pt-BR')}
												</td>
												<td width="10%">
													R$ {d.dueBalanceInMonth.toLocaleString('pt-BR')}
												</td>
												<td width="12%">
													R$ {d.totalDueBalance.toLocaleString('pt-BR')}
												</td>

												<td width="21%">{d.lastContactStatus}</td>
											</tr>
										))}
									</tbody>
									<tfoot>
										<tr>
											<td>
												<button>Exportar</button>
											</td>
											<td></td>
											<td>
												<p>Total de cliente: {[...item.data].length}</p>
											</td>
											<td></td>
											<td>
												<p>Valores totais:</p>
											</td>
											<td>
												R${' '}
												{[...item.data]
													.reduce((acc, v) => acc + v.overdueBalanceInMonth, 0)
													.toLocaleString('pt-BR')}
											</td>
											<td>
												R${' '}
												{[...item.data]
													.reduce((acc, v) => acc + v.totalOverdueBalance, 0)
													.toLocaleString('pt-BR')}
											</td>
											<td>
												R${' '}
												{[...item.data]
													.reduce((acc, v) => acc + v.dueBalanceInMonth, 0)
													.toLocaleString('pt-BR')}
											</td>
											<td>
												R${' '}
												{[...item.data]
													.reduce((acc, v) => acc + v.totalDueBalance, 0)
													.toLocaleString('pt-BR')}
											</td>

											<td>
												<Pagination
													count={countPages(item.data.length)}
													page={page[index] + 1}
													onChange={(e, page) => handleChange(e, page, index)}
												/>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						))}
					</TableContainer>
				)}
				<TableContainer>
					<div>
						{listTendencia.length > 0 ? (
							<table>
								<thead>
									<tr>
										<th>Shopping</th>
										<th>Razão Social</th>
										<th>CPF/CNPJ</th>
										<th>LUC</th>
										<th>Nome Fantasia</th>
										<th>Nº Boleto</th>
										<th>Data de venc. Negociado</th>
										<th>Tipo Contrato</th>
										<th>Valor negociado</th>
										<th>
											Tendência <input type="checkbox" />
										</th>
									</tr>
								</thead>
								<tbody>
									{listTendencia.map((item, index) => (
										<tr key={index}>
											<td>{item.shopping}</td>
											<td>{item.companyName}</td>
											<td>{item.cpfCnpj}</td>
											<td>{item.luc}</td>
											<td>{item.brand}</td>
											<td>{item.slipNumber}</td>
											<td>{item.slipDueDateNegociation}</td>
											<td>{item.contractType}</td>
											<td>{item.amountNegiciation}</td>
											<td align="right">
												<input type="checkbox" />
											</td>
										</tr>
									))}
								</tbody>
								<tfoot>
									<tr>
										{/* <td>
															<Pagination
																count={countPages(item.data.length)}
																page={page[index] + 1}
																onChange={(e, page) => handleChange(e, page, index)}
															/>
														</td> */}
									</tr>
								</tfoot>
							</table>
						) : null}
					</div>
				</TableContainer>
			</div>
		</>
	);
};
