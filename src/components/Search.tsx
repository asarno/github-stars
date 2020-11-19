import React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
    setQuery: (newValue: any) => void;
}

const Search: React.FC<Props> = ({
    setQuery,
}) =>  (
        <TextField
            label="search"
            variant="outlined"
            onChange={(e: any) => setQuery(e.target.value)}
        />
    )

export default Search;