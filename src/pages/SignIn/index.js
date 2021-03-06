import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform'

import { signInRequest } from '../../store/modules/auth/actions'

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um email válido').required(),
  password: Yup.string().required('A senha é obrigatória')
});

export default function SignIn() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <h1>Veneza</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>

        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
