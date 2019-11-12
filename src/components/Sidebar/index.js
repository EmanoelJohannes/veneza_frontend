import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Logout, Nav, Profile } from './styles';

export default function Sidebar() {
return (
    <Container>
    <div>
        <Nav>
            <Profile>
                <img src='https://api.adorable.io/avatars/50/abott@adorable.png' alt="Emanoel Johannes"/>
                <div>
                    <strong>Emanoel Johannes</strong>
                    <Link to="/profile">Meu perfil</Link>
                </div>                
            </Profile>
        </Nav>

        <Nav>
            <li>
                <Link to="/createEvent">Adicionar evento</Link>
            </li>

            <li>
                <Link to="/profile">Listar Eventos</Link>
            </li>

            <li>
                <Link to="/profile">Palestrantes</Link>
            </li>

            <li>
                <Link to="/profile">Programação</Link>
            </li>
        </Nav>
    </div>
    <Logout>
        Sair
    </Logout>

    </Container>
);
}