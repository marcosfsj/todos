import React from 'react';
import {useSnapshot} from 'valtio';
import LevelThree from './level-three';
import uiState from './ui-state';

const LevelTwo = (): JSX.Element => {
  const snap = useSnapshot(uiState);
  console.log('render two');
  return (
    <>
      <div>Level Two - {snap.text}</div>
      <div>
        <button onClick={() => (uiState.text = 'text level two')}>Change Text level two</button>
      </div>
      <LevelThree />
    </>
  );
};

export default React.memo(LevelTwo);
