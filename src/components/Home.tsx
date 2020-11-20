import React, { useState } from 'react';
import { Container } from './styled';
import Search from './Search';
import List from './List';

function Home() {
  // this is the user entered name to be queried
  const [query, setQuery] = useState('');
    // there is a toggle between 'user' & 'organization' when performing a search, which is passed into the search componenr
  const [type, setType] = useState('users');

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
