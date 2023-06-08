import { useCallback, useEffect, useState } from 'react';
import { PER_PAGE } from './constants';

import { GhItem } from './GhItem';
import { Paginator } from './Paginator';
import { Option } from './types';

type Props = {
  language: Option;
  page: number;
  setPage: (page: number) => void;
};

export const TopStars = ({ language, page, setPage }: Props) => {
  const [ghData, setGhData] = useState({ items: [], total_count: 0 });

  const fetchData = useCallback(async () => {
    const languageParam = language === 'All' ? '' : `+language:${language}`;
    const pageParams = `&per_page=${PER_PAGE}&page=${page}`;
    const response = await fetch(
      `https://api.github.com/search/repositories?q=stars:>10000${languageParam}${pageParams}&sort=stars`,
      {
        headers: {
          // Authorization: 'Bearer yabbadabbadoo',
        },
      }
    );

    const json = await response.json();
    setGhData(json);
  }, [language, page]);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  const topItems = ghData?.items;
  const totalPages = Math.ceil(ghData.total_count / PER_PAGE);

  return (
    <>
      <Paginator page={page} setPage={setPage} totalPages={totalPages} />
      <div className="gh-container">
        {topItems.map(
          (
            {
              node_id,
              name,
              stargazers_count,
              owner: { avatar_url, login, html_url },
            },
            index
          ) => (
            <GhItem
              key={node_id}
              name={name}
              stars={stargazers_count}
              avatar={avatar_url}
              login={login}
              html_url={html_url}
              rank={index + 1}
            />
          )
        )}
      </div>
    </>
  );
};
