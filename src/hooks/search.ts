import useSWR from 'swr';
import { search } from '../api/search';

export function useSearch(entry: string, type: string) {
	const { data, error } = useSWR(`/${type}/${entry}`, () => search(entry, type));
	return { data, error, isLoading: !data && !error };
}