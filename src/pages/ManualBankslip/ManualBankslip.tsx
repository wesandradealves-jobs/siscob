import React from 'react';
import { InputText } from '../../components/InputText/InputText';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { Multiselect, IOption } from '../../components/Multiselect/Multiselect';
import { TableManualBankslip } from './TableManualBankslip';
import { SubmitIcon } from '../../assets/SubmitIcon';

import {
	Container,
	FiltroWrapper,
	FieldGroup,
	FieldArea,
	Label,
	ActionArea,
	Dpicker,
	DatesWrapper,
	RadioWrapper,
	RadioOption,
	RadioLabel,
	TableSection,
} from './styles';

// const DATA = [
// 	{ value: 'TODOS', label: 'TODOS' },
// 	{ value: 'SIM', label: 'SIM' },
// 	{ value: 'NÃO', label: 'NÃO' },
// ];

const OPTIONS_MULTISELECT = [
	{ id: 1, label: 'Shopping 1' },
	{ id: 2, label: 'Shopping 2' },
	{ id: 3, label: 'Shopping 3' },
	{ id: 4, label: 'Shopping 4' },
	{ id: 5, label: 'Shopping 5' },
	{ id: 6, label: 'Shopping 6' },
	{ id: 7, label: 'Shopping 7' },
];

const ManualBankslip: React.FC = () => {
	return (
		<div className="wrapper">
			<Container>
				<FiltroWrapper>
					<FieldGroup>
						<FieldArea>
							<Label>Shopping</Label>
							<Multiselect
								selectedFromParent={[]}
								onPick={(opts: IOption[]) => console.log(opts)}
								search
								options={OPTIONS_MULTISELECT}
							/>
						</FieldArea>
						<FieldArea>
							<Label>Período (Data da negociação para pagamento)</Label>
							<DatesWrapper>
								<Label>De</Label>
								<Dpicker
									dateFormat="dd/MM/yyyy"
									selected={new Date()}
									onChange={(date: any) => console.log(date)}
								/>
								<Label>Até</Label>

								<Dpicker
									dateFormat="dd/MM/yyyy"
									selected={new Date()}
									onChange={(date: any) => console.log(date)}
								/>
							</DatesWrapper>
						</FieldArea>
						<FieldArea>
							<Label>CPF/CNPJ</Label>
							<InputText name="document" placeholder="Digite o CPF/CNPJ" />
						</FieldArea>
						<FieldArea>
							<Label>LUC</Label>
							<InputText name="luc" placeholder="Digite a LUC" />
						</FieldArea>
					</FieldGroup>
					<FieldGroup>
						<FieldArea>
							<Label>Nome fantasia</Label>
							<InputText name="fantasia" placeholder="Digite o nome fantasia" />
						</FieldArea>
						<FieldArea>
							<Label>Número do boleto</Label>
							<InputText
								name="boleto"
								placeholder="Digite o número do boleto"
							/>
						</FieldArea>
						<FieldArea className="streched">
							<RadioWrapper>
								<RadioOption name="radioAction" type="radio" id="incluir" />
								<RadioLabel htmlFor="incluir">
									<span className="styled-radio"></span>Incluir negativação
								</RadioLabel>
								<RadioOption name="radioAction" type="radio" id="baixar" />
								<RadioLabel htmlFor="baixar">
									<span className="styled-radio"></span>Baixar negativação
								</RadioLabel>
							</RadioWrapper>
						</FieldArea>
						<ActionArea>
							<DefaultButton styleType="secondary" text="PESQUISAR" />
						</ActionArea>
					</FieldGroup>
				</FiltroWrapper>

				<TableSection>
					<TableManualBankslip />
				</TableSection>
				<DefaultButton
					rightIcon={<SubmitIcon />}
					styleType="tertiary"
					text="PROSSEGUIR"
				/>
			</Container>
		</div>
	);
};
export default ManualBankslip;
