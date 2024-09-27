import { connectToDatabase } from './db';

const runMigrationDown = async () => {
    const connection = await connectToDatabase();

    const downMigrationSQL = `
        -- Your DOWN migration script here
        DROP TABLE IF EXISTS item_by_vendor;
    `;

    try {
        console.log("Running DOWN migration...");
        await connection.query(downMigrationSQL);
        console.log("DOWN Migration applied successfully!");
    } catch (error) {
        console.error("Error during DOWN migration:", error);
    } finally {
        await connection.end();
    }
};

runMigrationDown();
