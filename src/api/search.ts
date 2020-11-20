import { authedFetcher } from './index';
import { strict as assert } from "assert";

export interface Repo {
    stargazers_count: number
}

function transformData(data:Repo[]) {
    return data.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count);
}

export async function search(name: string, type: string): Promise<Repo[]> {
    const { status, data } = await authedFetcher.get(`/${type}/${name}/repos`);
    assert.equal(status, 200);
	return transformData(data);
}