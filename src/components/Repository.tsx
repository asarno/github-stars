import React from 'react';
import { RepositoryProps } from '../api/search';
import { FlexColumn, FlexRow, StyledPaper, Icon } from './styled';
import NumberFormat from 'react-number-format';

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
                    <NumberFormat value={stars} displayType='text' thousandSeparator />
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
