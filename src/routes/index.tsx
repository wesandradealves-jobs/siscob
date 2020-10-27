import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import MainLayout from './../layouts/MainLayout';

import SignIn from './../pages/SignIn/SignIn';
import Prioritization from './../pages/Prioritization/';
import BillingDetails from './../pages/BillingDetails/BillingDetails';
import BilletDetails from './../pages/BillingDetails/BilletDetails';
import EligibleCustomers from './../pages/EligibleCustomers/EligibleCustomers';
import ApproveNegative from './../pages/ApproveNegative/ApproveNegative';
import ApproveValidation from './../pages/ApproveValidation/ApproveValidation';
import ManualBankslip from './../pages/ManualBankslip/ManualBankslip';
import SerasaFeedback from './../pages/SerasaFeedback/SerasaFeedback';
import CustomerContacs from './../pages/CustomerContacts/CustomerContacs';

import ExemploReduxTodo from './../pages/ExemploReduxTodo';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const routesMap = [{
  parent: ['Cobranca','priorizacao','Customer-Contacts'],
  path: '/priorizacao',
  label: 'Priorização de cobrança',
  component: Prioritization
}, {
  parent: ['Cobranca','priorizacao','Customer-Contacts'],
  label: 'Contato Cliente',
  path: '/Customer-Contacts',
  component: CustomerContacs,
}, {
  label: 'Boletos',
  parent: ['header'],
  path: '/Boletos',
  component: BillingDetails,
}, {
  label: 'Cobrança',
  parent: ['header'],
  path: '/priorizacao',
  component: Prioritization,
}, {
  path: '/Detalhes-Boletos',
  component: BilletDetails,
}, {
  label: 'Clientes Elegíveis',
  parent: ['Retorno-Serasa','Clientes-Elegiveis','Aprovar-Negativacao','Validar-Aprovacoes','Inclusao-Baixa-Manual'],
  path: '/Clientes-Elegiveis',
  component: EligibleCustomers,
}, {
  label: 'Aprovar Negativo',	
  parent: ['Retorno-Serasa','Clientes-Elegiveis','Aprovar-Negativacao','Validar-Aprovacoes','Inclusao-Baixa-Manual'],
  path: '/Aprovar-Negativacao',
  component: ApproveNegative,
},{
  label: 'Validar Aprovações',
  parent: ['Retorno-Serasa','Clientes-Elegiveis','Aprovar-Negativacao','Validar-Aprovacoes','Inclusao-Baixa-Manual'],
  path: '/Validar-Aprovacoes',
  component: ApproveValidation,
}, {
  parent: ['Retorno-Serasa','Clientes-Elegiveis','Aprovar-Negativacao','Validar-Aprovacoes','Inclusao-Baixa-Manual'],
  label: 'Inclusão / Baixa manual',
  path: '/Inclusao-Baixa-Manual',
  component: ManualBankslip,
}, {
  label: 'Retorno Serasa',
  path: '/Retorno-Serasa',
  component: SerasaFeedback,
}];

const routeComponents = routesMap.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);

const Routes: React.FC = () => {	
	return (
		<Switch>
      <Route path="/" exact component={SignIn} />
			<MainLayout>
				{/* TODO: isPrivate */}

				{routeComponents}
			</MainLayout>
		</Switch>
	);
};

export default Routes;
