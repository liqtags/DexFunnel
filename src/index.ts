import express, { Request, Response, Application, NextFunction } from 'express';
import dotenv from 'dotenv';
import { setupSupabase } from './setupSupbase';
import { checkAPIKey } from './checkAPIKey';

dotenv.config();

const app: Application = express();
const port: number = 3000;

app.use(checkAPIKey);

(async function () {
    let supabase = await setupSupabase();

    // 404 handler
    app.use((req: Request, res: Response) => {
        res.status(404).send('Not Found');
    });

    // Error handler with types
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    app.listen(port, () => {
        app._router.stack
            .filter((r: any) => r.route)
            .map((r: any) => {
                console.log(`http://localhost:${port}${r.route.path}?apiKey=${process.env.API_KEY}`);
            });
        console.log(`Server is running on port ${port}`);
    });
    // if cltr+c is pressed save the waitlist number
    process.on("SIGINT", () => {
        console.log("Caught interrupt signal")
        process.exit(0);
    });
})();