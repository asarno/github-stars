import { authedFetcher } from './index';
import { strict as assert } from "assert";

export interface Query {

}

export interface Option {
    name: string;
    symbol: string;
}

export async function search(keywords: string): Promise<Query[]> {
    const { status, data } = await authedFetcher.get(``);
    assert.equal(status, 200);
	return data;
}