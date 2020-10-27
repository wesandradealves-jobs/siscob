import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
	TableContainer,
	CustTable,
	TableRow,
	RowItem,
	HeaderItem,
	Tick,
	PaginationWrapper,
} from './styles';

const CLIENTES = [
	{
		id: 1,
		shopping: 'VILLA LOBOS',
		nomeFantasia: 'Nome Fantasia',
		luc: 'SN00222',
		vencimento: '22/09/2020',
		numeroBoleto: '7458954215',
		valor: 'R$ 5.555,72',
		obs: 'Just. para inclusao ou baixa',
		selected: false,
	},
	{
		id: 2,
		shopping: 'VILLA LOBOS',
		nomeFantasia: 'Nome Fantasia',
		luc: 'SN00222',
		vencimento: '22/09/2020',
		numeroBoleto: '7458954215',
		valor: 'R$ 5.555,72',
		obs: 'Just. para inclusao ou baixa',
		selected: false,
	},
	{
		id: 3,
		shopping: 'VILLA LOBOS',
		nomeFantasia: 'Nome Fantasia',
		luc: 'SN00222',
		vencimento: '22/09/2020',
		numeroBoleto: '7458954215',
		valor: 'R$ 5.555,72',
		obs: 'Just. para inclusao ou baixa',
		selected: false,
	},
	{
		id: 4,
		shopping: 'VILLA LOBOS',
		nomeFantasia: 'Nome Fantasia',
		luc: 'SN00222',
		vencimento: '22/09/2020',
		numeroBoleto: '7458954215',
		valor: 'R$ 5.555,72',
		obs: 'Just. para inclusao ou baixa',
		selected: false,
	},
	{
		id: 5,
		shopping: 'VILLA LOBOS',
		nomeFantasia: 'Nome Fantasia',
		luc: 'SN00222',
		vencimento: '22/09/2020',
		numeroBoleto: '7458954215',
		valor: 'R$ 5.555,72',
		obs: 'Just. para inclusao ou baixa',
		selected: false,
	},
	{
		id: 6,
		shopping: 'VILLA LOBOS',
		nomeFantasia: 'Nome Fantasia',
		luc: 'SN00222',
		vencimento: '22/09/2020',
		numeroBoleto: '7458954215',
		valor: 'R$ 5.555,72',
		obs: 'Just. para inclusao ou baixa',
		selected: false,
	},
	{
		id: 7,
		shopping: 'VILLA LOBOS',
		nomeFantasia: 'Nome Fantasia',
		luc: 'SN00222',
		vencimento: '22/09/2020',
		numeroBoleto: '7458954215',
		valor: 'R$ 5.555,72',
		obs: 'Just. para inclusao ou baixa',
		selected: false,
	},
	{
		id: 8,
		shopping: 'VILLA LOBOS',
		nomeFantasia: 'Nome Fantasia',
		luc: 'SN00222',
		vencimento: '22/09/2020',
		numeroBoleto: '7458954215',
		valor: 'R$ 5.555,72',
		obs: 'Just. para inclusao ou baixa',
		selected: false,
	},
];

interface IItem {
	id: number;
	shopping: string;
	nomeFantasia: string;
	luc: string;
	vencimento: string;
	numeroBoleto: string;
	valor: string;
	obs: string;
	selected?: boolean;
}

export const TableManualBankslip = () => {
	const [clientes, setClientes] = useState<IItem[]>(CLIENTES);

	const toggleSelection = (cliente: IItem) => {
		const tempClientes = clientes.map(c => {
			if (c.id === cliente.id) {
				c.selected = !c.selected;
			}

			return c;
		});

		setClientes(tempClientes);
	};

	return (
		<TableContainer>
			<CustTable>
				<thead>
					<tr>
						<HeaderItem>
							<Tick />
						</HeaderItem>
						<HeaderItem>Shopping</HeaderItem>
						<HeaderItem>Nome Fantasia</HeaderItem>
						<HeaderItem>LUC</HeaderItem>
						<HeaderItem>Vencimento</HeaderItem>
						<HeaderItem>Número do Boleto</HeaderItem>
						<HeaderItem>Valor</HeaderItem>
						<HeaderItem>Observação</HeaderItem>
						<HeaderItem>Anexos</HeaderItem>
					</tr>
				</thead>
				<tbody>
					{CLIENTES.map(cliente => {
						return (
							<TableRow
								key={cliente.id}
								onClick={() => toggleSelection(cliente)}
							>
								<RowItem>
									<Tick
										className={cliente.selected === true ? 'selected' : ''}
									/>
								</RowItem>
								<RowItem>{cliente.shopping}</RowItem>
								<RowItem>{cliente.nomeFantasia}</RowItem>
								<RowItem>{cliente.luc}</RowItem>
								<RowItem>{cliente.vencimento}</RowItem>
								<RowItem>{cliente.numeroBoleto}</RowItem>
								<RowItem>{cliente.valor}</RowItem>
								<RowItem>{cliente.obs}</RowItem>
								<RowItem>Anexos</RowItem>
							</TableRow>
						);
					})}
				</tbody>
			</CustTable>

			<PaginationWrapper>
				<Pagination
					count={15}
					page={1}
					onChange={() => console.log('change page')}
					variant="outlined"
					shape="rounded"
					siblingCount={2}
				/>
			</PaginationWrapper>
		</TableContainer>
	);
};
