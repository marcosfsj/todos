import React, {useContext} from 'react';
import {ContextReducerImmerContext} from './ctxReducerImmerProvider';

const FourthLevel = () => {
  const {state, dispatch} = useContext(ContextReducerImmerContext);
  return (
    <div>
      <h1>Fourth Level</h1>
      <h3>{state.dataToBeUpdated}</h3>
      <button onClick={() => dispatch({type: 'updateState', payload: 'changed from fourth level'})}>
        Change store from Fourth level!
      </button>
    </div>
  );
};

export default FourthLevel;
