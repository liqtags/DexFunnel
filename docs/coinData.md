# Coin Data API
API for Coin Data from Supabase, updated everyday. It's data is very static but prices are updated on request, it's not onchain data like the other endpoints or from node so we only have per saved info but it's still useful.

## Endpoints 

* Coins by category: `GET /api/coins/category/{category}`
* Coins by tag: `GET /api/coins/tag/{tag}`
* Coin by symbol: `GET /api/coin/symbol/{symbol}`
* Coin by name: `GET /api/coin/name/{name}`
* Coins by chain: `GET /api/coin/chain/{chain}`
* Coin by fund: `GET /api/coins/fund/{fundName}`
* Coins by trending: `GET /api/coins/trending`
* Coins by newest: `GET /api/coins/newest`
* Coins by gainers: `GET /api/coins/gainers`
* Coins by losers: `GET /api/coins/losers`
* Coins by New ATH: `GET /api/coins/newath`
* Coins by New ATL `GET /api/coins/newatl`
* Coins by top 100: `GET /api/coins/top100`
* Coins by top 200: `GET /api/coins/top200`
* Coins Category list: `GET /api/coins/category/list`
* Coins Tag list: `GET /api/coins/tag/list`