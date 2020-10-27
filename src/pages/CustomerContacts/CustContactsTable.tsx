import React, { useEffect, useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import More from '../../assets/more';
import {
	TableContainer,
	CustTable,
	TableRow,
	RowItem,
	HeaderItem,
	PaginationWrapper,
	MenuActionsWrapper,
	MenuAction,
} from './styles';
import { useHistory } from 'react-router-dom';

type Contato = {
	isMenuActive: Boolean;
	contactName: string;
	contactDepartment: string;
};

interface Props {
	contatoList: Contato[];
}

export const CustContactsTable: React.FC<Props> = ({ contatoList }) => {
	const history = useHistory();
	const [rows, setRows] = useState<Contato[]>([]);

	useEffect(() => {
		setRows(contatoList);
	}, [contatoList]);

	const handleMore = (idx: number) => {
		console.log(idx);
		const treatedRows = rows.map((row: Contato, index) => {
			if (index === idx) row.isMenuActive = true;
			return row;
		});

		setRows(treatedRows);
	};

	const setMenuOff = () => {
		const treatedRows = rows.map((row: Contato) => {
			row.isMenuActive = false;
			return row;
		});

		setRows(treatedRows);
	};

	const editContact = (contact: Contato) => {
		history.push('/TESTE', {
			contact,
		});
	};

	return (
		<TableContainer>
			{rows.length > 0 ? (
				<CustTable>
					<thead>
						<tr>
							<HeaderItem>Cliente</HeaderItem>
							<HeaderItem>Razão Social</HeaderItem>
							<HeaderItem>Nome Fantasia</HeaderItem>
							<HeaderItem>Nome do Contato</HeaderItem>
							<HeaderItem>Área do Contato</HeaderItem>
							<HeaderItem>E-mails</HeaderItem>
							<HeaderItem>Telefones</HeaderItem>
							<HeaderItem>Ativo</HeaderItem>
							<HeaderItem></HeaderItem>
						</tr>
					</thead>
					<tbody>
						{rows.map((v, idx) => {
							return (
								<TableRow key={idx}>
									<RowItem> - </RowItem>
									<RowItem> - </RowItem>
									<RowItem> - </RowItem>
									<RowItem>{v.contactName}</RowItem>
									<RowItem>{v.contactDepartment}</RowItem>
									<RowItem> - </RowItem>
									<RowItem> - </RowItem>
									<RowItem> - </RowItem>
									<RowItem>
										<More click={() => handleMore(idx)} />
										{v.isMenuActive && (
											<ClickAwayListener onClickAway={() => setMenuOff()}>
												<MenuActionsWrapper>
													<MenuAction onClick={() => editContact(v)}>
														Editar
													</MenuAction>
													<MenuAction onClick={() => console.log('test')}>
														Excluir
													</MenuAction>
												</MenuActionsWrapper>
											</ClickAwayListener>
										)}
									</RowItem>
								</TableRow>
							);
						})}
					</tbody>
				</CustTable>
			) : (
				<p className="anyResults">Nenhum cliente filtrado</p>
			)}

			{/* <PaginationWrapper>
				<Pagination
					count={15}
					page={1}
					onChange={() => console.log('change page')}
					variant="outlined"
					shape="rounded"
					siblingCount={2}
				/>
			</PaginationWrapper> */}
		</TableContainer>
	);
};
