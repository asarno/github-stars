import {
    search,
  } from '../../api/search';
  
  test('search', async () => {
    expect(await search('react')).toStrictEqual(sampleSearch);
  });

  const sampleSearch = [];
  
  