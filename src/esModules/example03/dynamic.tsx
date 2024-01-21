import React, { lazy, Suspense } from 'react';

const LazySceneComp = lazy(() => import('./scene.tsx'));

const EsModulesDynamic = () => {
  const [showScene, setShowScene] = React.useState(false);

  return (
    <>
      <div>React Static Import</div>
      { /* Note we also make use of React Suspense to make the UX more resilient. This is highly recommended */}
      <Suspense fallback={<button disabled>Loading...</button>}>
        <button id="create-scene" onClick={() => setShowScene(!showScene)}>Turn { showScene ? 'off' : 'on' }</button>
        { /* The component JS code it is being loaded now when the LazySceneComp gets called!! */}
        {showScene && <LazySceneComp />}
      </Suspense>
    </>
  );
};

export default EsModulesDynamic;