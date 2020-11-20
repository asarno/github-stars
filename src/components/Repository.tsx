import React from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { RepositoryProps } from '../api/search';
import { FlexColumn, FlexRow } from './styled';
import NumberFormat from 'react-number-format';

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

function Repository({
    name,
    stars,
    language,
    url,
}: RepositoryProps) {
    return (
        <StyledPaper 
            onClick={() => window.open(url, "_blank")}
        >
            <FlexColumn
                style={{ alignItems: 'flex-start' }}
            >

                <FlexRow style={{ margin: '0.5rem 0' }}>
                    <Icon color="#0f95f5" className="fas fa-user" />
                    <span>{name}</span>
                </FlexRow>

                <FlexRow style={{ margin: '0.5rem 0' }}>
                    <Icon color="#24d167" className="fas fa-star" />
                    <NumberFormat value={stars} displayType='text' thousandSeparator={true} />
                </FlexRow>

                <FlexRow style={{ margin: '0.5rem 0' }}>
                    <Icon color="#8a22c5" className="fas fa-code" />
                    <span>{language}</span>
                </FlexRow>

            </FlexColumn>
        </StyledPaper>
    );
}

export default Repository;
