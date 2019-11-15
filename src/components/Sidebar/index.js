import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import { Container, Logout, Nav, Profile } from './styles';

export default function Sidebar() {

    const profile = useSelector(state => state.user.profile);

    return (
        <Container>
        <div>
            <Nav>
                <Profile>
                    <img src='https://api.adorable.io/avatars/50/abott@adorable.png' alt="Emanoel Johannes"/>
                    <div>
                        <strong>{profile.name}</strong>
                        <Link to="/profile">Meu perfil</Link>
                    </div>                
                </Profile>
            </Nav>

            <Nav>
                <li>
                    <Link to="/createEvent">Adicionar evento</Link>
                </li>

                <li>
                    <Link to="/events">Listar Eventos</Link>
                </li>

                <li>
                    <Link to="/">Palestrantes</Link>
                </li>

                <li>
                    <Link to="/">Programação</Link>
                </li>
            </Nav>
        </div>
        <Logout>
            Sair
        </Logout>

        </Container>
    );
}