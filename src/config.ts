import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PW: process.env.POSTGRES_PW,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_PORT:process.env.POSTGRES_PORT
};

export default config;
