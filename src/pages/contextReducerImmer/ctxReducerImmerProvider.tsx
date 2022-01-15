import React, {createContext, useMemo} from 'react';
import {useImmerReducer} from 'use-immer';

interface InitialState {
  dataToBeUpdated: string;
}

interface Action {
  type: 'updateState' | 'deleteState';
  payload: string;
}

const initialState: InitialState = {
  dataToBeUpdated: '',
};

const reducer = (draft: InitialState, action: Action) => {
  switch (action.type) {
    case 'updateState': {
      draft.dataToBeUpdated = action.payload;
      return;
    }
    default:
      return;
  }
};

interface Store {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
}

export const ContextReducerImmerContext = createContext<Store>({} as Store);

interface ProviderProps {
  children: React.ReactNode;
}

const ContextReducerImmerProvider = ({children}: ProviderProps) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const providedValue = useMemo<Store>(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return (
    <ContextReducerImmerContext.Provider value={providedValue}>
      {children}
    </ContextReducerImmerContext.Provider>
  );
};

export default ContextReducerImmerProvider;
