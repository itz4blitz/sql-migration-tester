import mysql from 'mysql2/promise';

export const connectToDatabase = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password', // Replace with your actual MySQL password
        database: 'test_db' // Replace with your actual MySQL database
    });
    return connection;
};
