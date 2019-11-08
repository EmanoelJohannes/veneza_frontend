import React from 'react';

import { Container, Logout, Nav } from './styles';
import Alert from 'react-bootstrap/Alert';

export default function Sidebar() {
  return (
    <Container>
      <div>
        <Nav>
          <li>
            <a href="#">Navegar</a>
          </li>

          <li>
            <a href="#">Rádio</a>
          </li>
        </Nav>

      </div>
      <Logout>
        Sair
      </Logout>

    </Container>
  );
}