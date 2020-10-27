import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import {
	FilterBar,
	TabMenu,
	TabItem,
	TabContent,
	Search,
	SelectArea,
	SelectAreaTemp,
	Dpicker,
	Label,
	DateArea,
	InputArea,
	RadioArea,
	Flex,
	Pagination,
	TableContainer,
} from './Prioritization.styles';

import Loader from '../../styles/loader';

import api from '../../services/api';
import mockapi from '../../services/mock-api';

import 'react-datepicker/dist/react-datepicker.css';

import DefaultButton from '../../components/DefaultButton';
import Select from '../../components/Select';
import InputText from '../../components/InputText';
import Radio from '../../components/Radio';
import { IShoppingItem, IShoppingsState } from '~/store/modules/shopping/types';
import { Multiselect } from '~/components/Multiselect/Multiselect';

export const Prioritization: React.FC = () => {
	const history = useHistory();
	const [lucState, setLucState] = useState('');
	const [companyState, setCompanyState] = useState('');
	const [contractState, setContractState] = useState('');
	// const [billingGroupState, setBillingGroupState] = useState('');
	const [tendencieState, setTendencieState] = useState('');
	const [shoppingState, setShoppingState] = useState('NORTESHOPPING');
	const [startDate, setStartDate] = useState(new Date());
	const [startDateFrom, setStartDateFrom] = useState(new Date());
	const [startDateTo, setStartDateTo] = useState(new Date());
	const [isTabActive, setIsTabActive] = useState(1);
	const [listShopping, setListShopping] = useState<any[]>([]);
	const [listTendencia, setListTendencia] = useState<any[]>([]);
	const [page, setPage] = useState([0]);
	const [loading, setLoading] = useState(Boolean);
	/** new set state */
	const [shoppingList, setShoppingList] = useState<OptionType[]>([]);
	const [filters, setFilters] = useState<IFiltersState>({
		shopping: '',
	});

	/** temp interfaces */
	type OptionType = {
		value: string;
		label: string;
	};

	interface IFiltersState {
		shopping: string;
	}

	/** loading data */
	useEffect(() => {
		getData();
	}, []);

	/** new methods */
	const getData = () => {
		const listItems: OptionType[] = [];
		api.get('/charge-legal-information/shoppings').then(response => {
			response.data.map((item: IShoppingItem) => {
				listItems.push({
					value: item.shoppingName,
					label: item.shoppingName,
				});
			});
			setShoppingList(listItems);
		});
	};

	const handleSelectChange = (name: string, value: string) => {
		setFilters({ ...filters, [name]: value });
	};

	/** old methods */
	const handleOnClickItem = (
		id: number,
		blockStart: string,
		blockEnd: string,
	) => {
		history.push(
			`/Boletos?shopping=${filters.shopping}&id=${id}&blockStart=${blockStart}&blockEnd=${blockEnd}`,
		);
	};

	const handleChange = (
		event: React.ChangeEvent<unknown>,
		value: number,
		index: number,
	) => {
		const newPage = [...page];
		newPage[index] = value - 1;
		setPage(newPage);
	};

	const countPages = (total: number) => {
		const pages = total / 20;
		return Math.ceil(pages);
	};

	const handleTab = (item: number) => {
		setIsTabActive(item);
		setListShopping([]);
		setListTendencia([]);
	};

	const getPriorizationByShopping = async () => {
		setLoading(true);

		if (filters.shopping == '') {
			filters.shopping = 'NORTESHOPPING';
		}

		const month = `${startDate.getMonth() + 1}`;
		const year = `${startDate.getFullYear()}`;
		const response = await api.get(
			`/prioritization/shopping/${filters.shopping}?month=${month}&year=${year}&showFourthBlock=false`,
			// `/prioritization`,
		);

		console.log(response);

		setListShopping(response.data);
		setLoading(false);
	};

	const reqTend = async () => {
		setLoading(true);

		const dayFrom = `0${startDateFrom.getDate()}`.slice(-2);
		const monthFrom = `0${startDateFrom.getMonth() + 1}`.slice(-2);
		const yearFrom = `${startDateFrom.getFullYear()}`;

		const dayTo = `0${startDateTo.getDate()}`.slice(-2);
		const monthTo = `0${startDateTo.getMonth() + 1}`.slice(-2);
		const yearTo = `${startDateTo.getFullYear()}`;

		const company = companyState ? `&companyName=${companyState}` : '';
		const luc = lucState ? `&LUC=${lucState}` : '';
		const contract = contractState ? `&contractType=${contractState}` : '';
		const tendencie = tendencieState ? `&tendencies=${tendencieState}` : '';

		const response = await api.get(
			`/prioritization/slip-tendency?shoppingName=${shoppingState}&dateFrom=${yearFrom}-${monthFrom}-${dayFrom}&dateTo=${yearTo}-${monthTo}-${dayTo}${company}${luc}${contract}${tendencie}`,
		);

		setListTendencia(response.data.data);
		console.log(response.data.data);
		setLoading(false);
	};

	const reqApiCorp = async () => {
		const month = `${startDate.getMonth() + 1}`;
		const year = `${startDate.getFullYear()}`;

		const response = await api.get(
			`/prioritization/billing-group?groupIds=37&month=${month}&year=${year}&showFourthBlock=false`,
		);
		setListShopping(response.data);
	};

	return (
		<>
			<div className="wrapper">

			</div>
		</>
	);
};
