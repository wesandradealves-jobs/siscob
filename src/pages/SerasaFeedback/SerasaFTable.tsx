import React from 'react';
import NEGATIVACOES from './data';
import Pagination from '@material-ui/lab/Pagination';
import {
	TableContainer,
	CustTable,
	TableRow,
	RowItem,
	HeaderItem,
	PaginationWrapper,
} from './styles';

export const SerasaFTable = () => {
	return (
		<TableContainer>
			<CustTable>
				<thead>
					<tr>
						<HeaderItem>Shopping</HeaderItem>
						<HeaderItem>Nome fantasia</HeaderItem>
						<HeaderItem>LUC</HeaderItem>
						<HeaderItem>Número do boleto</HeaderItem>
						<HeaderItem>Vencimento do boleto</HeaderItem>
						<HeaderItem>Valor</HeaderItem>
						<HeaderItem>CPF/CNPJ</HeaderItem>
						<HeaderItem>Operação Solicitada</HeaderItem>
						<HeaderItem>Status Retornado</HeaderItem>
					</tr>
				</thead>
				<tbody>
					{NEGATIVACOES.map(cliente => {
						return (
							<TableRow key={cliente.id}>
								<RowItem>{cliente.nomeShopping}</RowItem>
								<RowItem>{cliente.nomeFantasia}</RowItem>
								<RowItem>{cliente.luc} </RowItem>
								<RowItem>{cliente.numeroBoleto} </RowItem>
								<RowItem>{cliente.vctBoleto} </RowItem>
								<RowItem>R$ 55.555,55 </RowItem>
								<RowItem>{cliente.cpfCnpj}</RowItem>
								<RowItem>{cliente.operacao}</RowItem>
								<RowItem>{cliente.status}</RowItem>
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
