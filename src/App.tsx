import React from 'react';
import './index.css';
import EsModulesStatic from './esModules/example03/static.tsx';
import EsModulesDynamic from './esModules/example03/dynamic.tsx';
import { MemosWrapperComponent } from './memo';

// TODO: In future, make use of react router to switch between examples

function App() {
  return <MemosWrapperComponent />;
  // return <EsModulesDynamic />;
}

export default App;
