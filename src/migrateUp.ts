import { connectToDatabase } from './db';

const runMigrationUp = async () => {
    const connection = await connectToDatabase();

    const upMigrationSQL = `
        -- Your UP migration script here
        CREATE TABLE item_by_vendor (
            id BIGINT NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            part_number VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
        );
    `;

    try {
        console.log("Running UP migration...");
        await connection.query(upMigrationSQL);
        console.log("UP Migration applied successfully!");
    } catch (error) {
        console.error("Error during UP migration:", error);
    } finally {
        await connection.end();
    }
};

runMigrationUp();
