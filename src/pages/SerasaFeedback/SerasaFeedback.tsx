import React from 'react';
import {
	TopSection,
	Container,
	FiltroWrapper,
	FieldArea,
	FieldGroup,
	Label,
	ActionArea,
	DatesWrapper,
	Dpicker,
} from './styles';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { SerasaFTable } from './SerasaFTable';

import { ExcelIcon } from '../../assets/ExcelIcon';

const SerasaFeedback: React.FC = () => {
	return (
		<div className="wrapper">
			<Container>
				<FiltroWrapper>
					<FieldGroup>
						<FieldArea>
							<Label>Data da Operação</Label>
							<DatesWrapper>
								<Label>Inicial</Label>
								<Dpicker
									dateFormat="dd/MM/yyyy"
									selected={new Date()}
									onChange={(date: any) => console.log(date)}
								/>
								<Label>Final</Label>

								<Dpicker
									dateFormat="dd/MM/yyyy"
									selected={new Date()}
									onChange={(date: any) => console.log(date)}
								/>
							</DatesWrapper>
						</FieldArea>
						<ActionArea>
							<DefaultButton styleType="secondary" text="PESQUISAR" />
						</ActionArea>
					</FieldGroup>
				</FiltroWrapper>

				<SerasaFTable />

				<DefaultButton
					leftIcon={<ExcelIcon />}
					styleType="secondary"
					text="EXPORTAR"
				/>
			</Container>
		</div>
	);
};

export default SerasaFeedback;
