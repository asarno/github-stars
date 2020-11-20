import useSWR from 'swr';
import { search } from '../api/search';

export function useSearch(entry: string, type: string) {
	// SWR is a caching library created by creator of NextJS (Think Apollo without GraphQL)
	const { data, error } = useSWR(`/${type}/${entry}`, () => search(entry, type));
	return { data, error, isLoading: !data && !error };
}