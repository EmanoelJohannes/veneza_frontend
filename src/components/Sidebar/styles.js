import styled from 'styled-components';

export const Container = styled.div`

    height: 100%;
    width: 280px;
    background: #121212;
    color: #b3b3b3;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
        padding: 25px
    }
`;

export const Nav = styled.ul`
    list-style: none;

    li {
        margin-top: 10px;
        a {
            color: inherit;
            text-decoration: none;
            font-size: 14px;
            line-height: 32px;
        }

        &:hover{
            color: #fff
        }
    }
`;


export const Logout = styled.button`
    background: transparent;
    border: 0;
    border-top: 1px solid #282828;
    font-size: 14px;
    color: #b3b3b3;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    padding: 15px 25px;

    &:hover{
        color: #fff;

    }
`

export const Profile = styled.div`
    display: flex;
    align-items:center;    
    border-bottom: 1px solid #282828;
    
    div {
        margin-left: 10px;
        padding-bottom: 10px;
        strong {
            display: block;
            color: #eee;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #ddd;
        }
    }
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
`

;