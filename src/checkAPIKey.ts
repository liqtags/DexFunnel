export async function checkAPIKey(req: any, res: any, next: any) {
    const apiKey = req.query.apiKey;
    if (apiKey === process.env.API_KEY) {
        return next();
    } else {
        return res.status(401).send('Unauthorized');
    }
}