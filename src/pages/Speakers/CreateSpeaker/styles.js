import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    margin: 20px;
    padding: 30px;
    
    h1{
        font-size: 18px;
        color: #fff;
    } 

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.3);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            width: 100%;

            &::placeholder {
                color: rgba(255, 255, 255, 0.9);
            }
        }

        input[type='checkbox']{
            color: red;
            width: auto;
            display: flex;            
        }

        label {
            color: #fff;
            margin-top: 10px;
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 -10px;
            font-weight: bold;
        }

        hr {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 10px 0 20px;
        }

        button {
            margin: 35px 0 0;
            height: 44px;
            background: #3b9eff;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            
            &:hover{
                background: ${darken(0.08, '#3b9eff')}
            }
        }
    }
`;
