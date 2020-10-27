import React, { useState, useEffect } from 'react';

import { Container, TableFooter, Pagination } from './Table.styles';

import { Link } from 'react-router-dom';

import bin from './../../assets/bin.svg';

import api from './../../services/api';

interface DetailsList {
	customer: number;
	priority: number;
	customerName: string;
	cpfCnpj: string;
	status: any;
	brand: string;
	overdueBalanceInMonth: number;
	totalOverdueBalance: number;
	dueBalanceInMonth: number;
	totalDueBalance: number;
	lastContactStatus: string;
	hasCorporateBilling: any;
}
interface DataList {
	month: string;
	blockNumber: number;
	blockEndingDate: string;
	blockStartingDate: string;
	data: DetailsList[];
}

export default interface ITableProps {
	data: DataList[];
}

export const Table: React.FC<ITableProps> = data => {
	const [page, setPage] = useState([0]);
	const [params, setParams] = useState([]);

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

	const handleItem = async (
		customer: number,
		blockStartingDate: string,
		blockEndingDate: string,
	) => {
		const response = await api.get(
			`shopping/NORTESHOPPING/${customer}?blockStartingDate=${blockStartingDate}&blockEndingDate=${blockEndingDate}`,
		);
		setParams(response.data);
	};

	useEffect(() => {
		const countP = data.data.length;

		const tables = [];

		for (let i = 0; i < countP; i++) {
			tables.push(0);
		}
		setPage(tables);
	}, []);

	return (
		<Container>
			{data.data.map((item, index) => (
				<div key={item.blockNumber}>
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
								<Link key={params.length} to={`/Boletos/${params}`}>
									<tr
										key={d.cpfCnpj}
										onClick={() =>
											handleItem(
												d.customer,
												item.blockStartingDate,
												item.blockEndingDate,
											)
										}
									>
										<td width="6%">{d.priority}</td>
										<td width="15%">{d.customerName}</td>
										<td width="10%">{d.brand}</td>
										<td width="10%">{d.cpfCnpj}</td>
										<td width="7%">{d.status}</td>
										<td width="8%">{d.overdueBalanceInMonth}</td>
										<td width="8%">{d.totalOverdueBalance}</td>
										<td width="8%">{d.dueBalanceInMonth}</td>
										<td width="8%">{d.totalDueBalance}</td>
										<td width="20%">{d.lastContactStatus}</td>
									</tr>
								</Link>
							))}
						</tbody>
					</table>
					<TableFooter>
						<button>
							Exportar <img src={bin} alt="" />
						</button>
						<span>Total de cliente: 20</span>
						<span>Valores totais: R$ 180.359,96</span>
						<span>R$ 2.804.196,50</span>
						<span>R$ 0,00</span>
						<span>R$ 962.120,90</span>
						<Pagination
							count={countPages(item.data.length)}
							page={page[index] + 1}
							onChange={(e, page) => handleChange(e, page, index)}
						/>
					</TableFooter>
				</div>
			))}
		</Container>
	);
};
