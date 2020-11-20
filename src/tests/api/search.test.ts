import { act } from 'react-dom/test-utils';
import {
    search,
} from '../../api/search';

import sampleSearch from './sample-search.json';

test('search', () => {
    act(async () => {
        expect(await search('asarno', 'user')).toStrictEqual(sampleSearch);
    });
});
