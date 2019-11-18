import React, {useState, useEffect} from 'react';
import {format, parseISO} from 'date-fns';
import {Link} from 'react-router-dom';
import pt from 'date-fns/locale/pt';
import {Table, Button} from 'react-bootstrap';

import api from '../../../services/api';

import { Container } from './styles';

export default function ListSchedules(props) {

    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        async function loadSchedules() {
        const response = await api.get(`schedules/${props.match.params.event}`);

        const dataSchedules = response.data.map( schedule => ({
            ...schedule
        }))

        setSchedules(dataSchedules);
        }
        loadSchedules();
      }, []);


    return (
        <Container>
            
            <div className="box">
                <header>
                    <h1>Lista de programações</h1>                    
                </header>
                <Table responsive borderless>
                    <thead>
                        <tr>
                            <th>Atividade</th>
                            <th>Evento</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map(schedule => (
                            <tr key={schedule.id}>
                                <td> {schedule.activity} </td>  
                                <td> {schedule.event_id} </td>
                                <td> <Button variant="primary">Adicionar programação</Button> </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}
