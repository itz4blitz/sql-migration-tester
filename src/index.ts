import { exec } from 'child_process';

const runCommand = (command: string) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing ${command}:`, stderr);
                reject(error);
            } else {
                console.log(`Output of ${command}:`, stdout);
                resolve(stdout);
            }
        });
    });
};

const runTestFlow = async () => {
    try {
        console.log("1. Applying UP migration...");
        await runCommand('ts-node src/migrateUp.ts');

        console.log("2. Validating UP migration...");
        await runCommand('ts-node src/validateMigration.ts');

        console.log("3. Applying DOWN migration...");
        await runCommand('ts-node src/migrateDown.ts');

        console.log("4. Validating DOWN migration...");
        await runCommand('ts-node src/validateMigration.ts');
    } catch (error) {
        console.error("Error during migration flow:", error);
    }
};

runTestFlow();
