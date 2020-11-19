import React, { useState } from 'react';
import { Container } from './styled';
import Search from './Search';
import List from './List';

const initialState = '';

function Home() {
  const [query, setQuery] = useState(initialState);

  return (
    <Container>
      <Search
        setQuery={setQuery}
      />

      <List 
        query={query} 
      />

    </Container>
  );
}

export default Home;
