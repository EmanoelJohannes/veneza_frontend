import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import "react-datepicker/dist/react-datepicker.css"

import {storeEventRequest} from '../../../store/modules/event/actions'

import {Row, Col} from 'react-bootstrap'

import { Container } from './styles';


const schema = Yup.object().shape({
    title: Yup.string().required('O título é obrigátorio'),
    subtitle: Yup.string().required('O subtitulo é obrigatório'),
    state: Yup.string().required('O estado é obrigatório'),
    city: Yup.string().required('A cidade é obrigatória'),
    local: Yup.string().required('O local é obrigatório'),
    cep: Yup.string().min(1, 'Cep informado não é válido').required('O cep é obrigatório')
  });


export default function CreateEvent() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const dispatch = useDispatch();

    function handleSubmit({title, subtitle, state, city, local, cep}){
        dispatch(storeEventRequest(title, subtitle, state, city, local, cep, startDate, endDate))
    }

return (
    <Container>

        <h1>Adicionar evento</h1>

        <Form schema={schema} onSubmit={handleSubmit}>

            <Row>
                <Col sm={6}> 
                    <label>Titulo</label>
                    <Input name="title" placeholder="Título do evento"/> 
                </Col>
                <Col sm={6}>
                    <label>subtitulo</label>
                    <Input name="subtitle" placeholder="Subtítulo"/> 
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <label>Estado</label>
                    <Input name="state" placeholder="Estado"/> 
                </Col>
                <Col sm={6}>
                    <label>Cidade</label>
                    <Input name="city" placeholder="Cidade"/> 
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <label>Local</label>
                    <Input name="local" placeholder="Ex.: Universidade de Brasília"/> 
                </Col>
                <Col sm={6}>
                    <label>Cep</label>
                    <Input name="cep" placeholder="CEP"/> 
                </Col>
            </Row>

            <Row>
                <Col sm={6}> 
                    <label>Início</label>
                    <DatePicker selected={startDate} locale={pt} dateFormat="dd/MM/yyyy" onChange={date => setStartDate(date)} /> 
                </Col>
                <Col sm={6}> 
                    <label>Fim</label>
                    <DatePicker selected={endDate} locale={pt} dateFormat="dd/MM/yyyy" onChange={date => setEndDate(date)} /> 
                </Col>
            </Row>            

            <button type="submit">Adicionar evento</button>
        </Form>

    </Container>
);
}
