import React from 'react';
import { FlexColumn } from './styled';
import { useSearch } from '../hooks/search';
import Loader from './Loader';

interface Props {
    query: string;
    type: string;
}

function List({
    query,
    type,
}: Props) {
    const { data, error, isLoading } = useSearch(query, type);
    
    console.log({ data, error, isLoading });
    
    return (
        <FlexColumn>

            {isLoading && <Loader isLoading />}

            {/* {options.length > 0 && options.map((op: any) => {
                return <span>lol</span>
            })} */}

        </FlexColumn>
    );
}

export default List;
