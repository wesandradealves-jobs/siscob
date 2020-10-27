import React, { useEffect, useState } from 'react';
import {
	Container,
	FiltroWrapper,
	FieldGroup,
	FieldArea,
	Label,
	ActionArea,
	Section,
	LoaderWrapper,
	SectionTitle
} from './styles';
import { Multiselect, IOption } from '../../components/Multiselect/Multiselect';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { CustContactsTable } from './CustContactsTable';
import Loader from '../../assets/loader';
import api from '../../services/api';

const SHOPPINGS = [
	{ id: 1, label: 'NORTESHOPPING' },
	{ id: 2, label: 'TIJUCA' },
];

const GRUPO_COBRANCA = [
	{ id: 1, label: 'Grupo 1' },
	{ id: 2, label: 'Grupo 2' },
	{ id: 3, label: 'Grupo 3' },
];

const N_FANTASIA = [
	{ id: 1, label: 'Nome fantasia 1' },
	{ id: 2, label: 'Nome fantasia 2' },
	{ id: 3, label: 'Nome fantasia 3' },
];

const NEGOCIADOR = [
	{ id: 1, label: 'Negociador 1' },
	{ id: 2, label: 'Negociador 2' },
	{ id: 3, label: 'Negociador 3' },
];

type Cliente = IOption & {
	identifier: number;
	raizCpfCnpj: string;
	razaoSocial: string;
};

const EligibleCustomers: React.FC = () => {
	const [clientes, setClientes] = useState([]);
	const [clienteSelecionado, setClienteSelecionado] = useState<
		Cliente | undefined
	>(undefined);
	const [contatos, setContatos] = useState([]);
	const [loaderTableActive, setloaderTableActive] = useState(false);

	useEffect(() => {
		async function wrapAsync() {
			const { data } = await api.get(
				'/charge-legal-information/contacts/customers',
			);

			const enrichClient = data.data.map((cliente: Cliente) => {
				return {
					...cliente,
					id: cliente.identifier,
					label: cliente.razaoSocial,
				};
			});

			setClientes(enrichClient);
		}

		wrapAsync();
	}, []);

	const buscarContatos = async () => {
		setloaderTableActive(true);
		setContatos([]);

		try {
			const contatos = await api.get(
				'/charge-legal-information/contacts/customer-contacts',
				{
					params: {
						cpfCnpj: clienteSelecionado && clienteSelecionado.raizCpfCnpj,
					},
				},
			);
			setContatos(contatos.data.data);
		} catch (e) {
			console.log(e);
		} finally {
			setloaderTableActive(false);
		}
	};

	return (
		<div className="wrapper">
			<Container>
				<Section>
					<SectionTitle>Selecione os filtros desejados</SectionTitle>

					<FiltroWrapper className="filter">
						<FieldGroup className="filterGroup">
							<FieldArea>
								<Label className="label">Shopping</Label>
								<Multiselect
									className="select"
									selectedFromParent={[]}
									onPick={(opts: IOption[]) => console.log(opts)}
									search
									options={SHOPPINGS}
								/>
							</FieldArea>
							<FieldArea>
								<Label className="label">Grupo de Cobrança</Label>
								<Multiselect
									className="select"
									selectedFromParent={[]}
									onPick={(opts: IOption[]) => console.log(opts)}
									search
									options={GRUPO_COBRANCA}
								/>
							</FieldArea>
							<FieldArea>
								<Label className="label">Cliente</Label>
								<Multiselect
									className="select"
									// @ts-ignore
									selectedFromParent={
										clienteSelecionado ? [clienteSelecionado] : []
									}
									onPick={(opts: any[]) => setClienteSelecionado(opts[0])}
									search
									singleSelect={true}
									options={clientes}
								/>
							</FieldArea>
						</FieldGroup>

						<FieldGroup className="filterGroup">
							<FieldArea>
								<Label className="label">Nome Fantasia</Label>
								<Multiselect
									className="select"
									selectedFromParent={[]}
									onPick={(opts: IOption[]) => console.log(opts)}
									search
									options={N_FANTASIA}
								/>
							</FieldArea>
							<FieldArea>
								<Label className="label">Negociador</Label>
								<Multiselect
									className="select"
									selectedFromParent={[]}
									onPick={(opts: IOption[]) => console.log(opts)}
									search
									options={NEGOCIADOR}
								/>
							</FieldArea>
							<ActionArea>
								<DefaultButton
									className="btn"
									styleType="secondary"
									text="PESQUISAR"
									onClick={() => buscarContatos()}
								/>
							</ActionArea>
						</FieldGroup>
					</FiltroWrapper>
				</Section>
				<Section>
					<SectionTitle>Contatos cadastrados</SectionTitle>
					{loaderTableActive ? (
						<LoaderWrapper>
							<Loader />
						</LoaderWrapper>
					) : (
						<CustContactsTable contatoList={contatos} />
					)}
				</Section>
			</Container>
		</div>
	);
};

export default EligibleCustomers;
