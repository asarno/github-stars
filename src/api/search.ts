import { authedFetcher } from './index';
import { strict as assert } from "assert";

export interface Repo {
    id: string;
    name: string;
    owner: any;
    full_name: string;
    stargazers_count: number;
    language: string;
    html_url: string;
}
export interface RepositoryProps {
    id: string;
    name: string;
    avatar: string;
    fullName: string;
    stars: number;
    language: string;
    url: string;
}

function transformData(data: Repo[]) {
    return {
        name: data[0].owner.login,
        avatar: data[0].owner.avatar_url,
        repos: data.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count).map((repo: Repo) => {
            const {
                id,
                name,
                owner,
                full_name,
                stargazers_count,
                language,
                html_url,
            } = repo;

            return {
                id,
                name,
                fullName: full_name,
                avatar: owner.avatar_url,
                stars: stargazers_count,
                language,
                url: html_url,
            }
        })
    }
}

export async function search(name: string, type: string): Promise<any> {
    if (name !== "") {
        const { status, data } = await authedFetcher.get(`/${type}/${name}/repos`);
        assert.equal(status, 200);
        return transformData(data);
    }
    return [];
}