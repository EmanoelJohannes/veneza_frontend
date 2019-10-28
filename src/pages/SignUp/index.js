import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform'

import { signUpRequest } from '../../store/modules/auth/actions'

const schema = Yup.object().shape({
  email: Yup.string().email().required('Insira um email válido'),
  password: Yup.string().min(4, 'No minimo 4 caracteres').required('A senha é obrigatória'),
  name: Yup.string().required('O nome é obrigatório')
});

export default function SignUp() {

  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />
        <button type="submit">Criar conta</button>

        <Link to="/">Já estou cadastrado</Link>
      </Form>
    </>
  );
}
