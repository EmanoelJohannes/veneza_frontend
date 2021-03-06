import React, {useState, useEffect} from 'react';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {Table, Button} from 'react-bootstrap';

import api from '../../../services/api';

import { Container } from './styles';

export default function ListEvents() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function loadEvents() {
        const response = await api.get('events');


        const dataEvents = response.data.map( event => ({
            ...event,
            createFormatted: format(parseISO(event.begin), "d 'de' MMM", {locale: pt})   
        }))

        setEvents(dataEvents);
        }
        loadEvents();
      }, []);


    return (
        <Container>
            
            <div className="box">
                <header>
                    <h1>Lista de eventos</h1>                    
                </header>
                <Table responsive borderless>
                    <thead>
                        <tr>
                            <th>Evento</th>
                            <th>Auto Confirmação</th>
                            <th>Data</th>
                            <th>Cadastrados</th>
                            <th>Status</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event => (
                            <tr key={event.id}>
                                <td> {event.title} </td>
                                <td> {event.need_confirm_before === false ? 'Não' : 'Sim'} </td>
                                <td> {event.createFormatted} </td>    
                                <td> null </td>
                                <td> Falta criar </td>
                                <td> <Button variant="primary">Editar</Button> </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}
