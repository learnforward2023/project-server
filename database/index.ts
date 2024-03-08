import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const DATABASE_NAME =
	process.env.MYSQL_DATABASE_NAME || "together_project";

const sequelize = new Sequelize(
	DATABASE_NAME,
	process.env.MYSQL_USERNAME as string,
	process.env.MYSQL_PASSWORD,
	{
		host: process.env.MYSQL_HOST || "127.0.0.1",
		dialect: "mysql",
	}
);

export const connect = async () => {
	sequelize
		.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME};`)
		.then(() => {
			console.log("Database created or already exists");
		})
		.catch((err) => {
			console.error("Error creating database:", err);
		})
		.finally(() => {
			sequelize.query(`USE ${DATABASE_NAME};`);

			sequelize
				.sync()
				.then(() => {
					console.log("Tables synced");
				})
				.catch((err) => {
					console.error("Error syncing tables:", err);
				});
		});
};
