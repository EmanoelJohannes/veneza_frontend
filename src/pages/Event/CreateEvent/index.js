import React from 'react';
import {useDispatch} from 'react-redux';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';

import {storeEventRequest} from '../../../store/modules/event/actions'

import {Row, Col} from 'react-bootstrap'

import { Container } from './styles';


const schema = Yup.object().shape({
    title: Yup.string().required('O título é obrigátorio'),
    subtitle: Yup.string().required('O subtitulo é obrigatório'),
    state: Yup.string().required('O estado é obrigatório'),
    city: Yup.string().required('A cidade é obrigatória'),
    local: Yup.string().required('O local é obrigatório'),
    cep: Yup.string().min(1, 'Cep informado não é válido').required('O cep é obrigatório'),
  });


export default function CreateEvent() {

    const dispatch = useDispatch();

    function handleSubmit({title, subtitle, state, city, local, cep}){
        dispatch(storeEventRequest(title, subtitle, state, city, local, cep))
    }

return (
    <Container>

        <h1>Adicionar evento</h1>

        <Form schema={schema} onSubmit={handleSubmit}>

            <Row>
                <Col sm={6}> <Input name="title" placeholder="Título do evento"/> </Col>
                <Col sm={6}> <Input name="subtitle" placeholder="Subtítulo"/> </Col>
            </Row>

            <Row>
                <Col sm={6}> <Input name="state" placeholder="Estado"/> </Col>
                <Col sm={6}> <Input name="city" placeholder="Cidade"/> </Col>
            </Row>

            <Row>
                <Col sm={6}> <Input name="local" placeholder="Local do evento"/> </Col>
                <Col sm={6}> <Input name="cep" placeholder="CEP"/> </Col>
            </Row>

            <button type="submit">Adicionar evento</button>
        </Form>
    </Container>
);
}
