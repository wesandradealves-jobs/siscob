import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import bin from '../../assets/bin.svg';

import api from '../../services/api';

import pdfFile from '../../assets/pdf-file.svg';

import {
	Container,
	FilterBar,
	Box,
	Item,
	FilterCheck,
	Resume,
	Check,
	Checks,
	Tabela,
} from './styles';

import Loader from '../../styles/loader';

const BilletDetails: React.FC = () => {
	const history = useHistory();
	const [query, setQuery] = useState({
		slipids: '',
		shopping: '',
		blockStartingDate: '',
		cpf: '',
		razaoSocial: '',
		classificao: '',
	});
	const [data, setData] = useState<any>(null);
	const [loading, setlading] = useState(Boolean);

	/** new methods */
	const handleGeneratePdfBtn = (item: any) => {
		console.log(item);
		getSlipEncoded(item.slipId);
	};

	const getSlipEncoded = (slipId: number) => {
		api
			.get('/charge-legal-information/slip-print', {
				params: { slipNumberFrom: slipId, slipNumberTo: slipId },
			})
			.then(response => {
				convertAndGetPdfFile(response.data.content, slipId.toString());
			});
	};

	const convertAndGetPdfFile = (content: string, filename: string) => {
		const base64str = content;

		// decode base64 string, remove space for IE compatibility
		const binary = atob(base64str.replace(/\s/g, ''));
		const len = binary.length;
		const buffer = new ArrayBuffer(len);
		const view = new Uint8Array(buffer);
		for (let i = 0; i < len; i++) {
			view[i] = binary.charCodeAt(i);
		}

		// create the blob object with content-type "application/pdf"
		const blob = new Blob([view], { type: 'application/pdf' });
		const url = URL.createObjectURL(blob);

		// window.open(url,'_blank');

		const a: HTMLAnchorElement = document.createElement(
			'A',
		) as HTMLAnchorElement;
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	/** old methods */
	const getQueryStringParams = (queryString: string) => {
		if (!queryString) {
			queryString = window.location.search.substring(1);
		}

		const params: any = {};

		const queries = queryString.split('&');

		queries.forEach((indexQuery: string, index: number) => {
			const indexPair = indexQuery.split('=');

			const queryKey =
				index === 0
					? decodeURIComponent(indexPair[0]).substring(1)
					: decodeURIComponent(indexPair[0]);
			const queryValue = decodeURIComponent(
				indexPair.length > 1 ? indexPair[1] : '',
			);
			params[queryKey] = queryValue;
		});
		return params;
	};

	useEffect(() => {
		const params = getQueryStringParams(history.location.search);
		console.log(params);
		setQuery(params);
	}, []);

	useEffect(() => {
		setlading(true);
		console.log(query.slipids);
		if (query.slipids !== '') {
			const handleItem = async () => {
				const response = await api.get(
					`/prioritization/shopping/slips/${query.shopping}?slipIds=${query.slipids}&slipDue=true&slipFutureDue=true&slipNegociated=true&slipOriginals=true&slipBank=true&slipAdministration=true`,
				);
				setData(response.data);
				setlading(false);
			};
			handleItem();
		}
	}, [query]);

	return (
		<>
			{loading ? (
				<div className="loaderUser">
					<Loader />
				</div>
			) : (
				<div className="wrapper">
					<Container>
						<Resume>
							<h2>Dados do Cliente</h2>
							<FilterBar>
								<Box>
									<Item>
										<span>Shopping</span>
										<p>{query.shopping}</p>
									</Item>
									<Item>
										<span>CPF/CNPJ</span>
										<p>{query.cpf}</p>
									</Item>
									<Item>
										<span>Razão Social</span>
										<p>{query.razaoSocial}</p>
									</Item>
								</Box>

								<Box>
									<Item>
										<span>Mês e ano de inadimplência</span>
										<p>{query.blockStartingDate}</p>
									</Item>
									<Item>
										<span>Classificação</span>
										<p>{query.classificao}</p>
									</Item>
								</Box>
							</FilterBar>
						</Resume>
						<Check>
							<h2>Filtros</h2>
							<FilterCheck>
								<Checks>
									<label>
										<input type="checkbox" />
										<span>BOLETOS VENCIDOS</span>
									</label>
									<label>
										<input type="checkbox" />
										<span>BOLETOS ORIGINAIS</span>
									</label>
								</Checks>
								<Checks>
									<label>
										<input type="checkbox" />
										<span>BOLETOS A VENCER</span>
									</label>
									<label>
										<input type="checkbox" />
										<span>BOLETOS BANCÁRIOS</span>
									</label>
								</Checks>
								<Checks>
									<label>
										<input type="checkbox" />
										<span>BOLETOS NEGOCIADOS</span>
									</label>
									<label>
										<input type="checkbox" />
										<span>BOLETOS ADMINISTRATIVOS</span>
									</label>
								</Checks>
							</FilterCheck>
						</Check>
					</Container>
					<Tabela>
						<>
							<table>
								<thead>
									<tr>
										<th>LUC</th>
										<th>Marca</th>
										<th>Contrato</th>
										<th>Número do boleto</th>
										<th>
											Original /
											<br />
											Negociado
										</th>
										<th>Valor</th>
										<th>Vencimento</th>
										<th>Tendência</th>
									</tr>
								</thead>
								<tbody>
									{data?.map((item: any, index: number) => (
										<tr key={item.index}>
											<td>{item.luc}</td>
											<td>{item.branc}</td>
											<td>{item.contractTypeNumber}</td>
											<td>
												<button
													type="button"
													onClick={() => {
														handleGeneratePdfBtn(item);
													}}
												>
													{item.slipNumber}
													<img src={pdfFile} alt="pdfFile" />
												</button>
											</td>
											<td>{item.slipType}</td>
											<td>{item.slipAmount}</td>
											<td>{item.slipDueDate}</td>
											<td>{item.tendency ? 'Sim' : 'Não'}</td>
										</tr>
									))}
								</tbody>
								<tfoot>
									<tr>
										<td>
											<button type="button">
												Exportar
												<img src={bin} alt="" />
											</button>
										</td>
										<td />
										<td />
										<td />
										<td>
											<p>Valor total:</p>
										</td>
										<td>
											R$
											{data
												?.reduce((acc: any, v: any) => acc + v.slipAmount, 0)
												.toLocaleString('pt-BR')}
										</td>
										<td />
										<td />
									</tr>
								</tfoot>
							</table>
						</>
					</Tabela>
				</div>
			)}
		</>
	);
};

export default BilletDetails;
