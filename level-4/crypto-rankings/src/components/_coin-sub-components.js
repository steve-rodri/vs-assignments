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

export const Name = ({ name, favorite, showStar }) => (
  <div className="name">
    <h2>{`${favorite && showStar ? "⭐️" : ""} ${name}`}</h2>
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
          <p>Block Explorer</p>
        </a>
      )}
      {coin.blogUrl && (
        <a href={coin.blogUrl} target="blank" noopener="noreferrer">
          <p>Blog</p>
        </a>
      )}
      {coin.discordUrl && (
        <a href={coin.discordUrl} target="blank" noopener="noreferrer">
          <p>Discord</p>
        </a>
      )}
      {coin.facebookUrl && (
        <a href={coin.facebookUrl} target="blank" noopener="noreferrer">
          <p>Facebook</p>
        </a>
      )}
      {coin.githubUrl && (
        <a href={coin.githubUrl} target="blank" noopener="noreferrer">
          <p>GitHub</p>
        </a>
      )}
      {coin.linkedinUrl && (
        <a href={coin.linkedinUrl} target="blank" noopener="noreferrer">
          <p>LinkedIn</p>
        </a>
      )}
      {coin.mediumUrl && (
        <a href={coin.mediumUrl} target="blank" noopener="noreferrer">
          <p>Medium</p>
        </a>
      )}
      {coin.redditUrl && (
        <a href={coin.redditUrl} target="blank" noopener="noreferrer">
          <p>Reddit</p>
        </a>
      )}
      {coin.telegramUrl && (
        <a href={coin.telegramUrl} target="blank" noopener="noreferrer">
          <p>Telegram</p>
        </a>
      )}
      {coin.twitterUrl && (
        <a href={coin.twitterUrl} target="blank" noopener="noreferrer">
          <p>Twitter</p>
        </a>
      )}
      {coin.websiteUrl && (
        <a href={coin.websiteUrl} target="blank" noopener="noreferrer">
          <p>Website</p>
        </a>
      )}
      {coin.whitepaperUrl && (
        <a href={coin.whitepaperUrl} target="blank" noopener="noreferrer">
          <p>White Paper</p>
        </a>
      )}
      {coin.youtubeUrl && (
        <a href={coin.youtubeUrl} target="blank" noopener="noreferrer">
          <p>YouTube</p>
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
