import React from 'react';
import { FlexColumn, FlexRow } from './styled';
import { useSearch } from '../hooks/search';
import Loader from './Loader';
import Repository from './Repository';

import { RepositoryProps } from '../api/search';
import styled from 'styled-components';

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

interface Props {
    query: string;
    type: string;
}

function List({
    query,
    type,
}: Props) {
    const { data, error, isLoading } = useSearch(query, type);
        
    return (
        <FlexColumn>

            {isLoading && <Loader isLoading />}

            <FlexColumn>
                <Avatar src={data?.avatar} />
                <Name>{data?.name}</Name>
            </FlexColumn>

            <FlexRow style={{ justifyContent: 'center' }}>
                {data && data.repos?.length > 0 && data.repos.map((repo: RepositoryProps) => <Repository key={repo.id} {...repo} /> )}
            </FlexRow>

            {error && <span>Error: {error.response.data.message}</span>}

        </FlexColumn>
    );
}

export default List;
