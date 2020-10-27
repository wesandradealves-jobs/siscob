import React from 'react';
import NEGATIVACOES from './data';
import Pagination from '@material-ui/lab/Pagination';
import { Select } from '../../components/Select/Select';
import {
	TableContainer,
	CustTable,
	TableRow,
	RowItem,
	HeaderItem,
	PaginationWrapper,
} from './styles';

const DATA = [
	{ value: 'TODOS', label: 'TODOS' },
	{ value: 'SIM', label: 'SIM' },
	{ value: 'NÃO', label: 'NÃO' },
];

export const ApproveTable = () => {
	return (
		<TableContainer>
			<CustTable>
				<thead>
					<tr>
						<HeaderItem>Nome do Shopping</HeaderItem>
						<HeaderItem>Nome fantasia</HeaderItem>
						<HeaderItem>LUC</HeaderItem>
						<HeaderItem>Vencimento do boleto</HeaderItem>
						<HeaderItem>Número do boleto</HeaderItem>
						<HeaderItem>Valor do boleto</HeaderItem>
						<HeaderItem>Qtd de negativações</HeaderItem>
						<HeaderItem>Qtd de exceções</HeaderItem>
						<HeaderItem>Negativar</HeaderItem>
						<HeaderItem>Fiadores</HeaderItem>
						<HeaderItem>Justificativa</HeaderItem>
						<HeaderItem>Número do Chamado</HeaderItem>
						<HeaderItem>Observação</HeaderItem>
						<HeaderItem>Anexo</HeaderItem>
						<HeaderItem>Observação QA</HeaderItem>
					</tr>
				</thead>
				<tbody>
					{NEGATIVACOES.map(cliente => {
						return (
							<TableRow key={cliente.id}>
								<RowItem>{cliente.nomeShopping}</RowItem>
								<RowItem>{cliente.nomeFantasia}</RowItem>
								<RowItem>{cliente.luc} </RowItem>
								<RowItem>{cliente.vctBoleto} </RowItem>
								<RowItem>1234568 </RowItem>
								<RowItem>R$ 55.123,58 </RowItem>
								<RowItem>{cliente.qtdNegativacoes} </RowItem>
								<RowItem>{cliente.qtdExcecoes}</RowItem>
								<RowItem>
									<Select options={DATA} helperClass="row-select" />
								</RowItem>
								<RowItem>
									<Select options={DATA} helperClass="row-select" />
								</RowItem>
								<RowItem>{cliente.justificativa}</RowItem>
								<RowItem>{cliente.numeroChamado}</RowItem>
								<RowItem>{cliente.obs}</RowItem>
								<RowItem>anexo</RowItem>
								<RowItem>descrição</RowItem>
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
