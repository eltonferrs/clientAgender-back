import 'dotenv/config';
import path from 'path';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath = path.join(__dirname, "entities/**.{js,ts}")
    const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}")

    if(!process.env.DATABASE_URL){
        throw new Error("Missing env var: 'DATABASE_URL'")
    }

    return {
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
}

const AppDataSource = new DataSource(dataSourceConfig())

export { AppDataSource }