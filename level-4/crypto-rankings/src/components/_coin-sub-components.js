import { Link } from "react-router-dom";
import { formattedBigNum, numWithCommas } from "../helpers/strings";

export const FavoriteButton = ({ onFavorite, favorite }) => {
  const className = favorite ? "favorite-button favorite" : "favorite-button";
  return (
    <button className={className} onClick={onFavorite}>
      ⭐️
    </button>
  );
};

export const Rank = ({ rank }) => (
  <div className="rank">
    <h3>{rank}</h3>
  </div>
);

export const Logo = ({ id, logoUrl }) => (
  <img className="logo" src={logoUrl} alt={id} />
);

export const Name = ({ name }) => (
  <div className="name">
    <h2>{name}</h2>
  </div>
);

export const LinkedName = ({ name, id }) => (
  <Link className="name" to={`/${id}`}>
    <h2>{name}</h2>
  </Link>
);

export const Price = ({ price }) => {
  price = numWithCommas(parseFloat(price).toFixed(2));
  return (
    <div className="price">
      <p>{`$${price}`}</p>
    </div>
  );
};

export const MarketCap = ({ marketCap }) => {
  marketCap = formattedBigNum(parseInt(marketCap));
  return (
    <div className="market-cap">
      <p>{marketCap}</p>
    </div>
  );
};

export const Ticker = ({ id }) => (
  <div className="ticker">
    <h6>{id}</h6>
  </div>
);

export const Links = coin => {
  return (
    <div className="links">
      {coin.blockExplorerUrl && (
        <a href={coin.blockExplorerUrl} target="blank" noopener="noreferrer">
          Block Explorer
        </a>
      )}
      {coin.blogUrl && (
        <a href={coin.blogUrl} target="blank" noopener="noreferrer">
          Blog
        </a>
      )}
      {coin.discordUrl && (
        <a href={coin.discordUrl} target="blank" noopener="noreferrer">
          Discord
        </a>
      )}
      {coin.facebookUrl && (
        <a href={coin.facebookUrl}>
          target="blank" noopener="noreferrer" Facebook
        </a>
      )}
      {coin.githubUrl && (
        <a href={coin.githubUrl} target="blank" noopener="noreferrer">
          GitHub
        </a>
      )}
      {coin.linkedinUrl && (
        <a href={coin.linkedinUrl}>
          target="blank" noopener="noreferrer" LinkedIn
        </a>
      )}
      {coin.mediumUrl && (
        <a href={coin.mediumUrl} target="blank" noopener="noreferrer">
          Medium
        </a>
      )}
      {coin.redditUrl && (
        <a href={coin.redditUrl} target="blank" noopener="noreferrer">
          Reddit
        </a>
      )}
      {coin.telegramUrl && (
        <a href={coin.telegramUrl} target="blank" noopener="noreferrer">
          Telegram
        </a>
      )}
      {coin.twitterUrl && (
        <a href={coin.twitterUrl} target="blank" noopener="noreferrer">
          Twitter
        </a>
      )}
      {coin.websiteUrl && (
        <a href={coin.websiteUrl} target="blank" noopener="noreferrer">
          Website
        </a>
      )}
      {coin.whitepaperUrl && (
        <a href={coin.whitepaperUrl} target="blank" noopener="noreferrer">
          White Paper
        </a>
      )}
      {coin.youtubeUrl && (
        <a href={coin.youtubeUrl} target="blank" noopener="noreferrer">
          YouTube
        </a>
      )}
    </div>
  );
};

export const Description = ({ description }) => {
  return (
    <div className="description">
      <p>{description}</p>
    </div>
  );
};
