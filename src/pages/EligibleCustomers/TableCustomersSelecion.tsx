import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
	TableContainer,
	CustTable,
	TableRow,
	Totalizador,
	TotalizadorItem,
	RowItem,
	HeaderItem,
	Tick,
	PaginationWrapper,
} from './styles';

const CLIENTES = [
	{
		id: 1,
		shopping: 'VILLA LOBOS',
		clientes: 0,
		boletos: 0,
		fiadores: 0,
		selected: false,
	},
	{
		id: 2,
		shopping: 'VILLA LOBOS',
		clientes: 0,
		boletos: 1,
		fiadores: 0,
		selected: false,
	},
	{
		id: 3,
		shopping: 'VILLA LOBOS',
		clientes: 0,
		boletos: 0,
		fiadores: 0,
		selected: false,
	},
	{
		id: 4,
		shopping: 'VILLA LOBOS',
		clientes: 5,
		boletos: 0,
		fiadores: 6,
		selected: false,
	},
	{
		id: 5,
		shopping: 'VILLA LOBOS',
		clientes: 0,
		boletos: 0,
		fiadores: 0,
		selected: false,
	},
	{
		id: 6,
		shopping: 'VILLA LOBOS',
		clientes: 0,
		boletos: 5,
		fiadores: 0,
		selected: false,
	},
	{
		id: 7,
		shopping: 'VILLA LOBOS',
		clientes: 0,
		boletos: 0,
		fiadores: 10,
		selected: false,
	},
];

interface ICliente {
	id: number;
	shopping: string;
	clientes: number;
	boletos: number;
	fiadores: number;
	selected?: boolean;
}

export const TableCustomersSelecion = () => {
	const [clientes, setClientes] = useState<ICliente[]>(CLIENTES);

	const toggleSelection = (cliente: ICliente) => {
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
						<HeaderItem>Nome do Shopping</HeaderItem>
						<HeaderItem>Clientes para negativação</HeaderItem>
						<HeaderItem>Boletos para negativação</HeaderItem>
						<HeaderItem>Fiadores para negativação</HeaderItem>
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
								<RowItem>{cliente.shopping} </RowItem>
								<RowItem> {cliente.clientes} </RowItem>
								<RowItem>{cliente.boletos}</RowItem>
								<RowItem>{cliente.fiadores}</RowItem>
							</TableRow>
						);
					})}
					<Totalizador>
						<TotalizadorItem></TotalizadorItem>
						<TotalizadorItem>25</TotalizadorItem>
						<TotalizadorItem>15</TotalizadorItem>
						<TotalizadorItem>18</TotalizadorItem>
						<TotalizadorItem>0</TotalizadorItem>
					</Totalizador>
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
