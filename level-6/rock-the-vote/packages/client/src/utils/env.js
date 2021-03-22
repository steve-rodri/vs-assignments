const env = process.env.NODE_ENV;

export const baseUrl = (() => {
  if (env === "development")
    return process.env.REACT_APP_SERVER_DEVELOPMENT_BASE_URL;
  if (env === "production")
    return process.env.REACT_APP_SERVER_PRODUCTION_BASE_URL;
})();
