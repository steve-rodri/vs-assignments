export const FavoriteButton = ({ onFavorite }) => (
  <button onClick={onFavorite}>+</button>
);

export const Rank = ({ rank }) => (
  <div className="rank">
    <h3>{rank}</h3>
  </div>
);

export const Logo = ({ id, logoUrl }) => (
  <img
    className="logo"
    src={logoUrl}
    alt={id}
    style={{ height: "25px", width: "25px" }}
  />
);

export const Name = ({ name }) => (
  <div className="name">
    <h2>{name}</h2>
  </div>
);

export const Price = ({ price }) => (
  <div className="price">
    <p>{price}</p>
  </div>
);

export const MarketCap = ({ marketCap }) => (
  <div className="market-cap">
    <p>{marketCap}</p>
  </div>
);

export const Ticker = ({ id }) => (
  <div className="ticker">
    <h6>{id}</h6>
  </div>
);
