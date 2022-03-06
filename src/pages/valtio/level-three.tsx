import React from 'react';
import {useSnapshot} from 'valtio';
import LevelFour from './level-four';
import uiState from './ui-state';

const LevelThree = (): JSX.Element => {
  const snap = useSnapshot(uiState);

  return (
    <>
      <div>Level Three - {snap.text}</div>
      <div>
        <button onClick={() => (uiState.text = 'text level three')}>Change Text level three</button>
      </div>
      <LevelFour />
    </>
  );
};

export default React.memo(LevelThree);
