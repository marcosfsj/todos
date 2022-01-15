import {useContext} from 'react';
import FourthLevel from './fourthLevel';
import {ContextReducerImmerContext} from './ctxReducerImmerProvider';

const ThirdLevel = () => {
  const {state, dispatch} = useContext(ContextReducerImmerContext);
  return (
    <div>
      <h1>Third Level</h1>
      <h3>{state.dataToBeUpdated}</h3>
      <button onClick={() => dispatch({type: 'updateState', payload: 'changed from third level'})}>
        Change store from third level!
      </button>
      <FourthLevel />
    </div>
  );
};

export default ThirdLevel;
