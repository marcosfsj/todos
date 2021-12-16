import React, {useContext} from 'react';
import ThirdLevel from './thirdLevel';
import {ContextReducerImmerContext} from './ctxReducerImmerProvider';

const SecondLevel = () => {
  const {state, dispatch} = useContext(ContextReducerImmerContext);
  return (
    <div>
      <h1>Second Level</h1>
      <h3>{state.dataToBeUpdated}</h3>
      <button onClick={() => dispatch({type: 'updateState', payload: 'changed from second level'})}>
        Change store from second level!
      </button>
      <ThirdLevel />
    </div>
  );
};

export default SecondLevel;
