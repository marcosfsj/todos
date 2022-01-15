import {proxy} from 'valtio';

const uiState = proxy({text: 'hello'});

export default uiState;
