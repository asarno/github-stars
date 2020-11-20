import React from 'react';
import { Avatar, FlexColumn, FlexRow, Name } from './styled';
import { useSearch } from '../hooks/search';
import Loader from './Loader';
import Repository from './Repository';

import { RepositoryProps } from '../api/search';

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
                {data && data.repos?.length > 0 && data.repos.map((repo: RepositoryProps) => <Repository key={repo.id} {...repo} />)}
            </FlexRow>

            {error && <span>Error: {error.response.data.message}</span>}

        </FlexColumn>
    );
}

export default List;
