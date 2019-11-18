import React from 'react';
import {useDispatch} from 'react-redux';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';

import {storeSpeakerRequest} from '../../../store/modules/speaker/actions'

import {Row, Col} from 'react-bootstrap'

import { Container } from './styles';


const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigátorio'),
    email: Yup.string().required('O email é obrigatório'),
    vinculo: Yup.string().required('O vínculo/instituição é obrigatório'),
    description: Yup.string().required('A cidade é obrigatória')
  });


export default function CreateEvent() {
    const dispatch = useDispatch();

    function handleSubmit({name, email, vinculo, description}){
        dispatch(storeSpeakerRequest(name, email, vinculo, description))
    }

    return (
        <Container>

            <h1>Adicionar palestrante</h1>

            <Form schema={schema} onSubmit={handleSubmit}>

                <Row>
                    <Col sm={6}> 
                        <label>Nome</label>
                        <Input name="name" placeholder="Nome completo"/> 
                    </Col>
                    <Col sm={6}>
                        <label>E-mail</label>
                        <Input name="email" placeholder="E-mail para contato"/> 
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}> 
                        <label>Vínculo / Instituição</label>
                        <Input name="vinculo" placeholder="Vínculo / Instituição"/> 
                    </Col>
                    <Col sm={6}>
                        <label>Descrição (opcional)</label>
                        <Input name="description" placeholder="Descrição"/> 
                    </Col>
                </Row>


                <button type="submit">Adicionar evento</button>
            </Form>

        </Container>
    );
}
