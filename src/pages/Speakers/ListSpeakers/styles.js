import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    color: white;

    header {
        display: flex;
        justify-content: space-between;
        align-self: center;
        height: 60px;
        margin-bottom: 20px;
    }

    h1 {
        margin-bottom: 30px;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.8);
    }

    button {
        height: auto;
    }

    table {
        color: rgba(0, 0, 0, 1);
        background-color: rgba(255,255,255, 0);
    }

    table td, table th {
        vertical-align: 0;
    }

    th {
        text-align: center;
        font-weight: 600;
        border-bottom: 1px solid red;
    }

    tr {
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        
    }

    tr:first-child{
        border-top: 1px solid rgba(0, 0, 0, 0.2);
    }

    tr:last-child{
        border: none;
    }

    td{
        font-size: 14px;
        vertical-align: bottom;
    }

    .box {
        padding: 20px 60px;
        background-color: rgba(255,255,255, 0.7);
        border-radius: 10px;

    }
`;
