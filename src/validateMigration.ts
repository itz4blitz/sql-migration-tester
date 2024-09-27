import { connectToDatabase } from './db';

const validateMigration = async () => {
    const connection = await connectToDatabase();

    try {
        console.log("Validating migration...");
        const [rows] = await connection.query(
            "SELECT COUNT(*) AS count FROM information_schema.tables WHERE table_name = 'item_by_vendor'"
        );

        const tableExists = (rows as any[])[0].count > 0;
        console.log(`Table item_by_vendor exists: ${tableExists}`);

        if (tableExists) {
            const [vendorRows] = await connection.query("SELECT COUNT(*) AS count FROM item_by_vendor");
            console.log(`Row count in item_by_vendor: ${(vendorRows as any[])[0].count}`);
        }

    } catch (error) {
        console.error("Error during validation:", error);
    } finally {
        await connection.end();
    }
};

validateMigration();
