import React from 'react';
import { useSearch } from '../hooks/search';
import { Container } from './styled';

interface Props {
    query: string;
}

function List({
    query
}: Props) {
    const options = useSearch(query);
    console.log('options', options);
  return (
    <Container>
        todo
    </Container>
  );
}

export default List;
