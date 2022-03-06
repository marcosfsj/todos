import React from 'react';
import {useSnapshot} from 'valtio';
import LevelTwo from './level-two';
import uiState from './ui-state';

const LevelOne = (): JSX.Element => {
  const snap = useSnapshot(uiState);

  return (
    <>
      <div>Level One - {snap.text}</div>
      <div>
        <button onClick={() => (uiState.text = 'text level one')}>Change Text level one</button>
      </div>
      <LevelTwo />
    </>
  );
};

export default React.memo(LevelOne);
