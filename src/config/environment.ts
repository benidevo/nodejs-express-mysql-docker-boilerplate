export default {
  // app config
  appName: process.env.APP_NAME || "Boilerplate",
  port: process.env.PORT || "8000",
  nodeEnv: process.env.NODE_ENV || "development",
  secretKey: process.env.SECRET_KEY || "",

  // jwt config
  saltRounds: process.env.SALT_ROUNDS || 10,
  jwtAccessTokenSecret:
    process.env.JWT_ACCESS_TOKEN_SECRET ||
    "03afc0820d376f9fdb1e8faa460902c6f74705feb01f101c480f4205964e3e10",
  jwtRefreshTokenSecret:
    process.env.JWT_REFRESH_TOKEN_SECRET ||
    "7bfd6e6512e8ac8b56e31cfbdbe767892a87075039d4a524b2b2ddcb2fb2c69f",

  // redis config
  redisHost: process.env.REDIS_HOST || "redis",
  redisPort: process.env.REDIS_PORT || "6379",

  // database config
  PROD_DATABASE_URL: process.env.PROD_DATABASE_URL || "",
  dbHost: process.env.DB_HOST || "db",
  dbPort: process.env.DB_PORT || "3306",
  dbUsername: process.env.DB_USERNAME || "root",
  dbPassword: process.env.MYSQL_ROOT_PASSWORD || "SecuredPassword",
  dbName: process.env.MYSQL_DATABASE || "boilerplate",
};
