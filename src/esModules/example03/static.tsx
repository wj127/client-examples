import React from 'react';
import SceneComp from './scene.tsx';

const EsModulesStatic = () => {
  const [showScene, setShowScene] = React.useState(false);

  return (
    <>
      <div>React Static Import</div>
      <button id="create-scene" onClick={() => setShowScene(!showScene)}>Turn { showScene ? 'off' : 'on' }</button>
      { /* The component JS code was already loaded, due to how we imported it above */ }
      {showScene && <SceneComp />}
    </>
  );
};

export default EsModulesStatic;