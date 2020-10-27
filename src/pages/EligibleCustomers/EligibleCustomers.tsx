import React from 'react';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { ExcelIcon } from '../../assets/ExcelIcon';
import { TableCustomersSelecion } from './TableCustomersSelecion';
import { Container, Actions } from './styles';

const EligibleCustomers: React.FC = () => {
	return (
		<div className="wrapper">
			<Container>
				<p>
					<b>Data da geração da lista:</b> 18/09/2020
				</p>

				<Actions>
					<DefaultButton
						leftIcon={<ExcelIcon />}
						styleType="secondary"
						text="ATUALIZAR"
					></DefaultButton>
					<div className="right-aligned">
						<DefaultButton
							leftIcon={<ExcelIcon />}
							styleType="secondary"
							text="EXPORTAR"
						></DefaultButton>
						<DefaultButton
							leftIcon={<ExcelIcon />}
							styleType="tertiary"
							text="ENCHAMINHAR PARA APROVAÇÃO"
						></DefaultButton>
					</div>
				</Actions>

				<TableCustomersSelecion />
			</Container>
		</div>
	);
};

export default EligibleCustomers;
