type Props = {
  name: string;
  stars: number;
  avatar: string;
  login: string;
  html_url: string;
  rank: number;
}


export const GhItem = ({ name, stars, avatar, login, html_url, rank } : Props) => {
  return (
  <div className="gh-item">
    <div>#{rank}</div>
    <img src={avatar} className="avatar" />
    <a href={html_url}>{name}</a>
    <div>@{login}</div>
    <div>{stars}</div>
   </div>)
}
