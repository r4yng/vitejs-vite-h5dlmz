import { useCallback, useEffect, useState } from "react"

import { GhItem } from "./GhItem";

export const TopStars = () => {
  const [ghData, setGhData] = useState({ items: []});
  
  const fetchData = useCallback(async () => {
    const data = await fetch('https://api.github.com/search/repositories?q=stars:>10000&sort=stars');
  
    const json = await data.json();
    setGhData(json);
  }, [])
  
  useEffect(() => {
    fetchData()
      .catch(console.error);
  }, [fetchData])


  const topItems = ghData?.items.slice(0, 15);

  return (
  <>
    <div className="gh-container">
      {topItems.map(({ node_id, name, stargazers_count, owner: { avatar_url, login, html_url }}, index) => (
      <GhItem key={node_id} name={name} stars={stargazers_count} avatar={avatar_url} login={login} html_url={html_url} rank={index + 1}/>))}
    </div>
  </>);
}