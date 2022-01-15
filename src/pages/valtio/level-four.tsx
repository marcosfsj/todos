import React from 'react';
import {useSnapshot} from 'valtio';
import uiState from './ui-state';

const LevelFour = (): JSX.Element => {
  const snap = useSnapshot(uiState);
  console.log('render four');
  return (
    <>
      <div>Level Four - {snap.text}</div>
      <div>
        <button onClick={() => (uiState.text = 'text level four')}>Change Text level four</button>
      </div>
    </>
  );
};

export default React.memo(LevelFour);
