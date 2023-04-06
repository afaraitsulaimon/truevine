import styled from "styled-components";

export const Card = styled.div`
    width: 18em;
    height: 18em;
    background-color: #7baeff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
margin-top: 3em;
    p{
        padding: 1em;
        font-family: 'Fira Code', monospace;
        font-size: 0.8em;
        color: white;
    }

    p .leftQuote{

        margin-right: 1em;
    }

    p .rightQuote{

        margin-left: 1em;

    }

    span{
        margin-top:auto;
        margin-bottom:1em;
        
        align-self: center;
        color: white;
    }




    @media (max-width: 576px) {
        width: 12em;
    height: 10em;
    margin-bottom: 2.5em;
   
    p{
        padding: 0.3em;
        font-size: 0.5em;
    }

    p .leftQuote{

        margin-right: 0.5em;
    }

    p .rightQuote{

        margin-left: 0.5em;

    }

    span{
        margin-top:auto;
        margin-bottom:1em;
        
    }
    }

    @media(width:240px){

        width: 8em;
    height: 10em;

        span{
        font-size: 0.7em;
        
    }

    p{
        padding: 0.3em;
        font-size: 0.3em;
    }
    }
`;