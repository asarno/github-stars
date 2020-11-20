import React, { useState } from 'react';
import { FlexColumn } from './styled';
import { Tabs, Tab, TextField, Button } from '@material-ui/core';

interface Props {
    setQuery: (newValue: any) => void;
    setType: (newValue: any) => void;
    type: string;
}

const Search: React.FC<Props> = ({
    setQuery,
    type,
    setType,
}) => {
    const [value, setValue] = useState('');

    return (
            <FlexColumn>
                <Tabs
                    value={type}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(e, t) => setType(t)}
                    style={{ margin: '1rem' }}
                >
                    <Tab label="users" value="users" />
                    <Tab label="orgs" value="orgs" />
                </Tabs>
                <TextField
                    label={`enter ${type}`}
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ margin: '1rem' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setQuery(value)}
                    style={{ margin: '1rem' }}
                >
                    search
            </Button>
            </FlexColumn>
    )
}

export default Search;