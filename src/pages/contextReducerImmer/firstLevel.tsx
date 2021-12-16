import React, {useContext} from 'react';
import SecondLevel from './secondLevel';
import {ContextReducerImmerContext} from './ctxReducerImmerProvider';

const FirstLevel = () => {
  const {state, dispatch} = useContext(ContextReducerImmerContext);
  return (
    <div>
      <h1>First Level</h1>
      <h3>{state.dataToBeUpdated}</h3>
      <button onClick={() => dispatch({type: 'updateState', payload: 'changed from first level'})}>
        Change store from First level!
      </button>
      <SecondLevel />
    </div>
  );
};

export default FirstLevel;
