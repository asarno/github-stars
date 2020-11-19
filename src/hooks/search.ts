import { search } from '../api/search';
import { useState, useEffect } from 'react';

let debounceTimeout: any;

export function useSearch(keyword: string) {
    const [options, setOptions] = useState([] as any);

    useEffect(() => {
        if (keyword !== '') {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
    
            debounceTimeout = setTimeout(async () => {
                const newOptions = await search(keyword);
                setOptions(newOptions);
            }, 300);
        }

    }, [keyword])

    return options;
}