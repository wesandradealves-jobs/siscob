import React, { useState, useEffect } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {
	MultiselectSearch,
	Label,
	List,
	ListItem,
	Content,
	Box,
	Options,
	Footer,
	MultiselectWrapper,
	Title,
	FinishButton,
	SearchInput,
} from './styles';

interface Props {
	options: IOption[];
	label?: string;
	onPick?: any;
	selectedFromParent: IOption[];
	title?: string;
	singleSelect?: boolean;
	search?: boolean;
	fixedLabel?: string;
	className?: string;
	isOpen?: boolean;
}

export interface IOption {
	id: number;
	label: string;
	Icon?: string;
}

export const Multiselect: React.FC<Props> = ({
	options,
	label,
	onPick,
	selectedFromParent,
	title,
	singleSelect,
	search,
	fixedLabel,
	className
}) => {
	const [isOpen, setOpen] = useState(false);
	const [selected, setSelected] = useState<IOption[]>([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		setSelected(selectedFromParent);
	}, [selectedFromParent]);

	const isSelected = (o: IOption) => {
		const status = selected.filter((s: IOption) => {
			if (s.label === o.label) return true;
			return false;
		});

		return status.length > 0;
	};

	const onOpen = () => {
		setOpen(true);
		setSearchText('');
	};

	const handleSelect = (option: IOption) => {
		if (singleSelect) {
			setSelected([option]);
			onPick([option]);
			setOpen(false);
		} else if (isSelected(option)) {
			const index = selected.findIndex(e => {
				return e.label === option.label;
			});

			const tempOps = [...selected];
			tempOps.splice(index, 1);

			setSelected(tempOps);
			onPick(tempOps);
		} else {
			setSelected([...selected, option]);
			onPick([...selected, option]);
		}
	};

	const optionsRender = () => {
		let arr: IOption[] = [];
		if (searchText && search) {
			arr = options?.filter(a =>
				a.label.toUpperCase().includes(searchText.toUpperCase()),
			);
		} else {
			arr = options;
		}

		return arr.map(o => {
			return (
				<ListItem
					onClick={() => handleSelect(o)}
					key={o.id}
					isSelected={isSelected(o) ? true : false}
				>
					<span>{o.label}</span>
					{o.Icon && (
						<span>
							<o.Icon />
						</span>
					)}
				</ListItem>
			);
		});
	};

	var classNames = require('classnames');

	return (
		<MultiselectWrapper>
			{label && <Label>{label}</Label>}
			<Content className={className}>
				<Box
					onClick={() => onOpen()}
					isOpen={isOpen ? true : false}
					completed={selected.length > 0 ? true : false}>
					{fixedLabel ? (
						<p>{fixedLabel}</p>
					) : (
						<p>{selected.length} Item(ns) Selecionado(s)</p>
					)}

					<i className="fas fa-angle-down"></i>
				</Box>
				{isOpen && (
					<ClickAwayListener
						onClickAway={() => {
							setOpen(false);
						}}
					>
						<Options>
							{search && (
								<MultiselectSearch className="searchBar">
									<SearchInput
										type="text"
										placeholder="Pesquisar..."
										onChange={e => setSearchText(e.target.value)}
									/>
									<i className="fas fa-search"></i>
								</MultiselectSearch>
							)}

							{title && <Title>{title}</Title>}
							<List>{optionsRender()}</List>
							{/*{!singleSelect && (
															<Footer>
																<FinishButton onClick={() => setOpen(false)}>OK</FinishButton>
															</Footer>
														)}*/}
						</Options>
					</ClickAwayListener>
				)}
			</Content>
		</MultiselectWrapper>
	);
};
