import React from 'react';
import { Layout } from 'antd';

import ButtonProcess from './components/ButtonProcess';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout className="app-container">
        <ButtonProcess />
      </Layout>
    </div>
  );
};

export default App;
