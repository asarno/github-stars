import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
`;

const FlexRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 80vw;
    flex-wrap: wrap;
`;

const FlexColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
`;

const Link = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #007aff;
    cursor: pointer;
    margin: 1rem;
`;

const Avatar: any = styled.div`
    border-radius: 50%;
    background: ${({ src }: any) => `url('${src}')`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    margin-bottom: 0.5rem;
`;

const Name: any = styled.span`
    font-size: 1.3rem;
`;

const StyledPaper = styled(Paper)`
    margin: 1rem;
    width: 300px;
    cursor: pointer;
    transition: transform 1s ease-out !important;

    &:hover {
       transform: scale(1.2);
    }
`;

const Icon = styled.i`
    margin-right: 1rem;
    font-size: 1.5rem;
    color: ${({ color }: any) => color};
`;

export {
    FlexRow,
    FlexColumn,
    Container,
    Link,
    Avatar,
    Name,
    StyledPaper,
    Icon,
}
