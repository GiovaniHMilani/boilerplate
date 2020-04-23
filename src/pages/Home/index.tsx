import React from 'react';
import { FiUser, FiLock, FiArrowRight } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import './home.scss';

const Home: React.FC = () => {
  return (
    <>
      <div className="div">
        <Input icon={FiUser} placeholder="Nome de usuario" />
        <Input icon={FiLock} placeholder="Senha" />
        <Button size="large" icon={FiArrowRight}>
          ENTRAR
        </Button>
      </div>
    </>
  );
};

export default Home;
