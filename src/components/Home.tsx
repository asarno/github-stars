import React, { useState } from 'react';
import { Container } from './styled';
import Search from './Search';
import List from './List';

function Home() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('user');

  return (
    <Container>

      <Search
        type={type}
        setType={setType}
        setQuery={setQuery}
      />

      <List
        query={query}
        type={type}
      />

    </Container>
  );
}

export default Home;
