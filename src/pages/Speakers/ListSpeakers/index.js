import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Table, Button} from 'react-bootstrap';

import api from '../../../services/api';

import { Container } from './styles';

export default function ListSpeakers() {

    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        async function loadSpeakers() {
            const response = await api.get('speakers');

            console.log(response);

            const dataEvents = response.data.map( speaker => ({
                ...speaker
            }))

            setSpeakers(dataEvents);
        }
        loadSpeakers();
      }, []);


    return (
        <Container>
            
            <div className="box">
                <header>
                    <h1>Lista de palestrantes</h1> 
                    <Link to="/createSpeaker"><Button>Adicionar palestrante</Button></Link>                  
                </header>
                <Table responsive borderless>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Instituição</th>
                            <th>E-mail</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {speakers.map(speaker => (
                            <tr key={speaker.id}>
                                <td> {speaker.name} </td>
                                <td> {speaker.vinculo} </td>
                                <td> {speaker.email} </td>
                                <td> <Button variant="primary">Editar</Button> </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}
