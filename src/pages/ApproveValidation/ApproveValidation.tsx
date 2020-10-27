import React from 'react';
import { Select } from '../../components/Select/Select';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { SubmitIcon } from '../../assets/SubmitIcon';
import { ExcelIcon } from '../../assets/ExcelIcon';
import { ApproveTable } from './ApproveTable';
import { Multiselect, IOption } from '../../components/Multiselect/Multiselect';
import {
	Container,
	ActionArea,
	FiltroWrapper,
	FieldArea,
	FieldGroup,
	Label,
	Section,
} from './styles';

const DATA = [
	{ value: 'TODOS', label: 'TODOS' },
	{ value: 'SIM', label: 'SIM' },
	{ value: 'NÃO', label: 'NÃO' },
];

const OPTIONS_MULTISELECT = [
	{ id: 1, label: 'Grupo 1' },
	{ id: 2, label: 'Grupo 2' },
	{ id: 3, label: 'Grupo 3' },
	{ id: 4, label: 'Grupo 4' },
	{ id: 5, label: 'Grupo 5' },
	{ id: 6, label: 'Grupo 6' },
	{ id: 7, label: 'Grupo 7' },
];

const ApproveValidation = () => {
	return (
		<div className="wrapper">
			<Container>
				<FiltroWrapper>
					<FieldGroup>
						<FieldArea>
							<Label>Portfólio</Label>
							<Select options={DATA} />
						</FieldArea>
						<FieldArea>
							<Label>Clientes que já estão no Serasa atualmente</Label>
							<Select options={DATA} />
						</FieldArea>
						<FieldArea>
							<Label>Clientes que já estiveram no Serasa anteriormente</Label>
							<Select options={DATA} />
						</FieldArea>
					</FieldGroup>
					<FieldGroup>
						<FieldArea>
							<Label>Grupos de Cobrança</Label>
							<Multiselect
								selectedFromParent={[]}
								onPick={(opts: IOption[]) => console.log(opts)}
								search
								options={OPTIONS_MULTISELECT}
							/>
						</FieldArea>
						<FieldArea>
							<Label>Clientes que nunca estiveram no Serasa</Label>
							<Select options={DATA} />
						</FieldArea>
						<ActionArea>
							<DefaultButton styleType="secondary" text="PESQUISAR" />
						</ActionArea>
					</FieldGroup>
				</FiltroWrapper>
				<Section>
					<DefaultButton
						leftIcon={<SubmitIcon />}
						styleType="tertiary"
						text="APROVAR E SUBMETER NEGATIVAÇÃO"
					/>
				</Section>
				<ApproveTable />
				<Section>
					<DefaultButton
						leftIcon={<ExcelIcon />}
						styleType="secondary"
						text="EXPORTAR"
					/>
				</Section>
			</Container>
		</div>
	);
};

export default ApproveValidation;
