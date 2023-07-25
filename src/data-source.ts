import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { CreateEntities1690326410568 } from "./migrations/1690326410568-createEntities";
import { User } from "./entities/user.entity";
import { Address } from "./entities/addresses.entity";
import { CreateEntities1690326720720 } from "./migrations/1690326720720-createEntities";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/Entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: `${process.env.PGPASSWORD!}`,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        ssl: Boolean(process.env.SSLMODE),
        entities: [User, Address],
        migrations: [CreateEntities1690326410568, CreateEntities1690326720720],
      }
);
export default AppDataSource;
