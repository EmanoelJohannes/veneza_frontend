import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 200px;
    background: #121212;
    color: #b3b3b3;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

import styled from 'styled-components';

export const Nav = styled.ul`
    list-style: none;

    li {
        a {
            color: inherit;
            text-decoration: none;
            
        }
    }
`;


export const Logout = styled.button`
    background: transparent;
    border: 0;
    border-top: 1px solid #282828;
    font-size: 13px;
    color: #b3b3b3;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    padding: 15px 25px;

    &:hover{
        color: #fff;

    }
`;