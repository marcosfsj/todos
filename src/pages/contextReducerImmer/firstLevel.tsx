import {useContext} from 'react';
import SecondLevel from './secondLevel';
import ContextReducerImmerProvider, {ContextReducerImmerContext} from './ctxReducerImmerProvider';

const FirstLevel = () => {
  const {state, dispatch} = useContext(ContextReducerImmerContext);
  return (
    <ContextReducerImmerProvider>
      <div>
        <h1>First Level</h1>
        <h3>{state.dataToBeUpdated}</h3>
        <button
          onClick={() => dispatch({type: 'updateState', payload: 'changed from first level'})}
        >
          Change store from First level!
        </button>
        <SecondLevel />
      </div>
    </ContextReducerImmerProvider>
  );
};

export default FirstLevel;
