import { Reducer } from 'redux';
import { IShoppingsState } from './types';

const INITIAL_STATE: IShoppingsState = {
	items: [],
};

const shopping: Reducer<IShoppingsState> = () => {
	return INITIAL_STATE;
};

export default shopping;
